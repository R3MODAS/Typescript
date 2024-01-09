const express = require("express");
const app = express();

/*
1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
2. User should send a username and password in headers
*/

// ugly way of doing it without middleware
// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "Remo" || password != "pass") {
//     res.status(400).json({"msg": "Somethings up with your inputs"})
//     return
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({"msg": "Somethings up with your inputs"})
//     return
//   }
//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!"
//   })
// });

// app.get("/replace-kidney", (req,res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;
  
//     if (username != "Remo" || password != "pass") {
//       res.status(400).json({"msg": "Somethings up with your inputs"})
//       return
//     }
  
//     if (kidneyId != 1 && kidneyId != 2) {
//       res.status(400).json({"msg": "Somethings up with your inputs"})
//       return
//     }
//     // do kidney replacement logic here
//     res.json({
//       msg: "Your kidney is fine!"
//     })
// })

// let's create wrapper function to avoid dry principle (repeating code)

// function inputValidator(username, password){
//   if (username != "Remo" || password != "pass") {
//     return true
//   }
//   return false
// }

// function kidneyIdValidator(kidneyId){
//   if (kidneyId != 1 && kidneyId != 2){
//     return true
//   }
//   return false
// }

// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if(inputValidator(username,password)){
//     res.status(400).json({message: "Somethings up with your username or password"})
//     return;
//   }

//   if (kidneyIdValidator(kidneyId)) {
//     res.status(400).json({message: "Somethings up with your kidneyId"})
//     return;
//   }
//   // do something with kidney here
//   res.json({
//     message: "Your kidney is fine!"
//   })
// });

// app.get("/replace-kidney", (req,res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if(inputValidator(username,password)){
//     res.status(400).json({message: "Somethings up with your username or password"})
//     return;
//   }

//   if (kidneyIdValidator(kidneyId)) {
//     res.status(400).json({message: "Somethings up with your kidneyId"})
//     return;
//   }
//     // do kidney replace logic here
//     res.json({
//       msg: "Your kidney has been replaced!"
//     })
// })

// middlewares
// app.get(route,callback func, callback func, callback func......)

function userMiddleware(req,res,next){
  const username = req.headers.username;
  const password = req.headers.password;

  if(username != "Remo" || password != "pass"){
    res.status(403).json({
      error:"Invalid Username or Password"
    })
  }
  else{
    next();
  }

}

function kidneyMiddleware(req,res,next){
  const kidneyId = req.query.kidneyId;

  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({
      error : "Invalid input"
    })
  }
  else{
    next()
  }
}

let numberOfRequests = 0;

function calculateRequests(req,res,next){
  numberOfRequests++;
  console.log(`Number of requests made so far ${numberOfRequests}`);
  next()
}

app.use(calculateRequests)
app.use(express.json())

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req,res) => {
  res.json({
    message : 'Your heart is healthy'
  })
})

app.listen(3000, () => console.log(`Server started at http://localhost:3000`))