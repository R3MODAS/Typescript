//! Basics of Express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json());

// app.get("/", function(req,res){
//     res.send('Hello World!');
// })

// we can send html as well
app.get("/", function(req,res){
    res.send('<h1>Hello world</h2>');
})

app.post("/backend-api/conversations",function (req,res) {
    // console.log(req.headers.authorization) 
    // console.log(req.body)
    const message = req.body.message;
    console.log(message)
    res.json({
        output : "2 + 2 = 4"
    })
})

app.listen(port, function(){
    console.log(`Server is running on http://localhost:${port}`)
})