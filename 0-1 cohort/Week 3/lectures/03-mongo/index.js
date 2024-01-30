// const express = require("express")
// const mongoose = require("mongoose")

// const DB_NAME = "userDB"
// const DB_URL = "mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net"

// mongoose.connect(`${DB_URL}/${DB_NAME}`)

// Schema for the User model/collection 
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Username is required"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         unique: true,
//         lowercase: [true, "Email should be lowercase"]
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         min: [8, "Password should be more than 8 characters"]
//     }
// })

// creating the model/collection named User
// const User = mongoose.model("User",userSchema)

// providing the data to insert into the model
// const newUser = new User({username: "Remo", email: "remo@gmail.com", password: "remodas7774"})

// saving the data inside the model of the db
// newUser.save().then(() => console.log(`Data has been saved successfully !!!`))

//! Practical Approach
const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const PORT = 3000 || process.env.PORT
const DB_NAME = "userDB"
const DB_URL = "mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net"
const jwtPassword = "123456"

mongoose.connect(`${DB_URL}/${DB_NAME}`)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: [true, "Email should be in lowercase"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        unique: true,
        min: [8, "Password should be more than 8 characters"]
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

const app = express()
app.use(express.json())

app.post("/signup", async(req,res) => {
    const {username, email, password} = req.body

    const existingUser = await User.findOne({username: username})

    if(existingUser){
        res.status(403).json({
            message: 'User already exists in the db !!!'
        })
    }

    else{
        const createUser = new User({
            username: username,
            email: email,
            password: password
        })

        createUser.save()
        .then((data) => {
            res.status(200).json({
                message: 'User has been added to the db successfully !!!'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({
                message: 'Something went wrong with the user data !!!'
            })
        })
    }
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))




