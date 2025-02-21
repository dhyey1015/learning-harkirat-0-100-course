const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: "User got created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})

    res.json({
        course : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username

    await User.updateOne({
        username: username
    }, {
        "$push" : {
            coursePurchased : courseId
        }
    })

    res.json({
        message: "course Purchased"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    const users = await User.findOne({
        username: username
    })
    const courses = await Course.find({
        _id: {
            "$in" : users.coursePurchased
        }
    }) 

    res.json({
        course : response
    })
});

module.exports = router