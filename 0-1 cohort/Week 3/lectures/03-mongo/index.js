const mongoose = require("mongoose")
const express = require("express");
const app = express();

app.use(express.json())

//! Basic of MongoDB 
const DB_URL = "mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net"
const DB_NAME = "USER_DB"

// connecting to DB
// mongoose.connect(`${DB_URL}/${DB_NAME}`)

// creating a schema
// const userSchema = new mongoose.Schema({
//     username : {
//         type : String,
//         required : [true, "username is required"],
//         unique : true,
//         lowercase : true
//     },
//     email : {
//         type : String,
//         required : [true, "email is required"],
//         unique : true,
//         lowercase : true
//     },
//     password: {
//         type: String,
//         required: [true, 'password is required'],
//     },
// })

// Schema of mongoose which creates a model/collection
// const User = mongoose.model("User", userSchema)

// Data to insert into DB
// const user = new User({username : "Remo Das", email : "remo@gmail.com", password : "remo123"})
// user.save().then(() => console.log(`Data has been saved Successfully`))

//! Let's do it with practical example
mongoose.connect(`${DB_URL}/${DB_NAME}`)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const user = new User({
        username: username,
        email: email,
        password: password
    })

    // Finding the username exists in the DB or not
    const existingUser = await User.findOne({ username: username })

    if (existingUser) {
        return res.status(400).json({
            message: `User already exists`
        })
    }
    else {
        user.save()
        res.json({
            message: `User ${user.username} has been created!`
        })
    }

})

app.listen(3000, () => console.log(`Server started at http://localhost:3000`))