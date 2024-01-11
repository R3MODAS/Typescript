const express = require("express");
const zod = require("zod");
const app = express();

/*
1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
2. User should send a username and password in headers
*/

//! ugly way of doing it without middleware
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

//! let's create wrapper function to avoid dry principle (repeating code)

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

//! middlewares
// app.get(route,callback func, callback func, callback func......)

// function userMiddleware(req,res,next){
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if(username != "Remo" || password != "pass"){
//     res.status(403).json({
//       error:"Invalid Username or Password"
//     })
//   }
//   else{
//     next();
//   }

// }

// function kidneyMiddleware(req,res,next){
//   const kidneyId = req.query.kidneyId;

//   if(kidneyId != 1 && kidneyId != 2){
//     res.status(403).json({
//       error : "Invalid input"
//     })
//   }
//   else{
//     next()
//   }
// }

// let numberOfRequests = 0;

// function calculateRequests(req,res,next){
//   numberOfRequests++;
//   console.log(`Number of requests made so far ${numberOfRequests}`);
//   next()
// }

// app.use(calculateRequests)
// app.use(express.json())

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req,res) => {
//   res.json({
//     message : 'Your heart is healthy'
//   })
// })

//! what if we don't use input validation
// app.use(express.json())
// app.post("/health-checkup", (req,res) => {
//   // user may send wrong data and we need handle it
//   const kidneys = req.body.kidneys;
//   const numberOfKidneys = kidneys.length;
//   res.json({
//     message : `You have ${numberOfKidneys} kidneys`
//   })
// })

//! global catches
// app.use((err,req,res,next) => {
//   // console.log(err);
//   res.json({
//     message : `Some problems has occured on our server`
//   })
// })

//! Intro to ZOD
// const schema = zod.array(zod.number());

// Schema for this
/*
  {
    email : string 
    password : atleast 8 letters
    country : "IN" , "US"
  }
*/

const schema = zod.object({
  email : zod.string().email({ message: "Invalid email address" }),
  password : zod.string().min(8, {message : 'Please enter minimum 8 characters'}),
  country : zod.literal('IN').or(zod.literal('US')),
  kidneys : zod.array(zod.number()).max(2, {message: "Must not have more than two kidneys"})
})

app.use(express.json())

app.post("/health-checkup", (req,res) => {
  const response = schema.safeParse(req.body);
  // console.log(response.error)
  if(!response.success){
    res.status(411).json({
      message : `Input is invalid`
    })
  }
  else{
    res.json({
      response : response.data
    })
  }
}) 

// app.use((err,req,res,next) => {
//   // console.log(err);
//   res.json({
//     message : `Some problems has occured on our server`
//   })
// })


app.listen(3000, () => console.log(`Server started at http://localhost:3000`))