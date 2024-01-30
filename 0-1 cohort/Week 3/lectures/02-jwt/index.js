/*
    Assignment:

    1. post /signin with body - { username: string, password: string}
    returns a jwt with username encrypted

    2. get /users with headers - authorization header
    returns an array of all users if user is signed in (token is correct)
    returns 403 status code if not

*/

const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

const jwtPassword = "123456"
const PORT = 3000

const ALL_USERS = [
    {
        username: "John Doe",
        password: "P@ssw0rd",
        email: "john.doe@example.com",
    },
    {
        username: "Alice Smith",
        password: "Secure123",
        email: "alice.smith@example.com",
    },
    {
        username: "Bob Jones",
        password: "StrongPwd456",
        email: "bob.jones@example.com",
    },
    {
        username: "Emma Wilson",
        password: "SecretPass",
        email: "emma.wilson@example.com",
    },
];

app.use(express.json())

function userExists(username, password){
    //! find method (Hard Todo)
    let checkUser = false
    ALL_USERS.find(user => {
        if(user.username === username && user.password === password){
            checkUser = true
        }
    })
    return checkUser
}

app.post("/signin", (req,res) => {
    const {username,password} = req.body
    console.log(userExists(username,password))
    if(!userExists(username,password)){
        return res.status(403).json(
            { message: "User doesnt exist in our in memory db" }
        );
    }
    else{
        let token = jwt.sign({username}, jwtPassword)
        res.json({
            token
        })
    }
})

app.get("/users", (req,res) => {
    const token = req.headers.authorization
    const {username} = jwt.verify(token, jwtPassword)
    res.json({
        users: ALL_USERS.filter(user => user.username === username ? false : true) 
    })
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))