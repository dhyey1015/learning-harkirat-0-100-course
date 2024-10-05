//idk why its not working in local(ig its because of version problem of node i have 12.22.9 latest is 20+) copy paste this or replit and it will work

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb+srv://dhyeykakadiya1015:password123456789@cluster0.zwht8.mongodb.net/user_app_new",
);
const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
    }
    const user = new User({
        email: email,
        username: username,
        password: password,
    });
    user.save();
    res.json({
        msg: "user created successfully",
    });
});


    
