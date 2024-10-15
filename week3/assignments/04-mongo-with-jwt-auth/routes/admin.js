const { Router } = require("express");
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")

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
    // Implement admin signup logic
    // const username = req.headers.username
    // const password = req.headers.password
    // // check is user alr
    // Admin.findOne({
    //     username: username,
    // })
    // .then(function(value){
    //     if(value){
    //         const token =  jwt.sign(value, "dhyey")
    //         res.json({
    //             token: token
    //         })
    //     }
    // })
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