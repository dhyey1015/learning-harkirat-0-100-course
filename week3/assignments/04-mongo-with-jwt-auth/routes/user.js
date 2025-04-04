const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    User.create({
        username: username,
        password: password,
    })
    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password

    const user = await User.findOne({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
     
    res.json({
        message: "Purchased"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const users = await User.findOne({
        username: req.username
    })
    // user.purchasedCourses it will give array of purchased course ids
    const courses = await Course.find({
        _id: {
            "$in": users.purchasedCourses
        }
    })
    res.json({
        course: courses
    })

});

module.exports = router