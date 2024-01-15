const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "12321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "13321",
        name: "Priya kumari",
    },
    {
        username: "remo@gmail.com",
        password: "123321",
        name: "Sharadindu Das",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array

    // let checkUser = false;
    // ALL_USERS.forEach((user) => {
    //     if (user.username === username && user.password === password) {
    //         checkUser = true;
    //     }
    // });
    // return checkUser;

    //! Hard Todo (using find)
    let checkUser = false;
    ALL_USERS.find(user => {
        if (user.username === username && user.password === password) {
            checkUser = true;
        }
    })
    return checkUser;
}



app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json(
            { message: "User doesnt exist in our in memory db" }
        );
    }

    let token = jwt.sign({ password: password }, jwtPassword)
    return res.json({
        token
    })
})

app.get("/users", (req, res) => {
    try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, jwtPassword)
        const password = decoded.password

        const filteredUser = ALL_USERS.filter(user => user.password != password);
        res.json({
            users : filteredUser
        })
    } catch (err) {
        return res.status(403).json({
            message: `Invalid token`
        })
    }
})

app.listen(3000, () => console.log(`Server started at http://localhost:3000`))