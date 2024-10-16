const { Router } = require("express");
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")
const {JWT_SECRET} = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    // check is user alr

    await Admin.create({
        username: username,
        password: password,
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
    console.log(JWT_SECRET)

    const user = await Admin.findOne({
        username: username,
        password: password
    })
    if (user){
        const token = jwt.sign({
            username
        }, JWT_SECRET)
    
        res.json({
            token: token
        })
    }
    else{
        res.json({
            message: "your are not registered"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price,
    })
    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    
    res.json({
        course: response
    })
});

module.exports = router;