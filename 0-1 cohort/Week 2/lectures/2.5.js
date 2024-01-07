const express = require("express");
const app = express();

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}

// app.get("/", function(req,res){
//     const n = req.query.n;
//     const result = sum(n);
//     res.send(`The Sum of ${n} natural nos are : ${result}`);
// })

// app.get("/:hobby", (req,res) => {
//     let hobby = req.params.hobby;
//     hobby = hobby.slice(0,1).toUpperCase() + hobby.slice(1).toLowerCase();
//     res.send(`Hey my Hobby is ${hobby}`);
// })

/* Assignment (In Memory Hospital)
    GET - user can check how many kidneys they have and their kidney status (healthy or not)
    POST - user can add a new healthy kidney
    PUT - user can replace a kidney, make it healthy
    DELETE - user can remove a unhealthy kidney
*/

const users = [
    {
        name: "Remo",
        kidneys: [
            { healthy: true },
            { healthy: true }
        ]
    }
];

app.get("/", (req, res) => {
    const patientName = users[0].name;
    const kidneys = users[0].kidneys;
    const numberOfKidneys = kidneys.length;

    // healthy kidneys
    const numberOfHealthyKidneys = kidneys.filter((kidney) => kidney.healthy === true).length

    // unhealthy kidneys
    const numberOfUnhealthyKidneys = kidneys.filter((kidney) => kidney.healthy === false).length

    res.json({
        patientName,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
})

// middlewares
app.use(express.json());

app.post("/", (req, res) => {
    const healthy = req.body.healthy;
    users[0].kidneys.push({
        "healthy": healthy
    })
    res.json({
        message: `Added a new kidney with the status of ${healthy}`
    });
})

app.put("/", (req, res) => {
    if(checkKidneyStatus()){
        users[0].kidneys.forEach((kidney) => kidney.healthy = true)
        res.json({
            message: `Updated every kidney with the status healthy`
        });
    }
    else{
        res.status(411).json({
            message : `Every kidney has a status healthy`
        })
    }
})

function checkKidneyStatus() {
    let isKidneyHealthy = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            isKidneyHealthy = true;
        }
    }
    return isKidneyHealthy
}

app.delete("/", (req, res) => {

    if(checkKidneyStatus()){
        const HealthyKidneys = users[0].kidneys.filter((kidney) => kidney.healthy === true)
        users[0].kidneys = HealthyKidneys;
        res.json({
            message: `Removed kidney with the status unhealthy`
        });
    }
    else{
        res.status(411).json({
            message : `No kidney is unhealthy to be removed`
        })
    }


})

app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
})