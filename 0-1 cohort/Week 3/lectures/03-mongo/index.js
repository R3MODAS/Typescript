import mongoose from "mongoose";

const DB_URL = "mongodb+srv://remo:remo123@cluster0.zi35bim.mongodb.net"
const DB_NAME = "USER_DB"

// connecting to DB
mongoose.connect(`${DB_URL}/${DB_NAME}`)

// creating a schema
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "username is required"],
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required : [true, "email is required"],
        unique : true,
        lowercase : true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
})

// Schema of mongoose which creates a model/collection
const User = mongoose.model("User", userSchema)

const user = new User({username : "Harshit Patel", email : "harshit@gmail.com", password : "harshit123"})
user.save().then(() => console.log(`Data has been saved Successfully`))

