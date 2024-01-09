const express = require("express");
const app = express();

/*
1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
2. User should send a username and password in headers
*/

// ugly way of doing it without middleware
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "Remo" || password != "pass") {
    res.status(400).json({"msg": "Somethings up with your inputs"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your inputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })
});

app.get("/replace-kidney", (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
  
    if (username != "Remo" || password != "pass") {
      res.status(400).json({"msg": "Somethings up with your inputs"})
      return
    }
  
    if (kidneyId != 1 && kidneyId != 2) {
      res.status(400).json({"msg": "Somethings up with your inputs"})
      return
    }
    // do kidney replacement logic here
    res.json({
      msg: "Your kidney is fine!"
    })
})


app.listen(3000, () => console.log(`Server started at http://localhost:3000`))