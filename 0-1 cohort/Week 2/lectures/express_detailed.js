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
            { healthy: false }
        ]
    }
];

app.get("/", (req,res) => {
    const patientName = users[0].name;
    const kidneys = users[0].kidneys;
    const noOfKidneys = kidneys.length;

    const healthyKidneys = kidneys.filter(kidney => kidney.healthy === true).length
    const unhealthyKidneys = kidneys.filter(kidney => kidney.healthy === false).length

    res.json({
        patientName,
        noOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

// middlewares
app.use(express.json());

app.post("/", (req,res) => {
    const {healthy} = req.body;
    const kidney = users[0].kidneys;
        kidney.push({
            healthy
        })
        res.json({
            message : `You have successfully added a healthy kidney`
        })
})

function checkKidneyStatus(){
    let isKidneyOk = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            isKidneyOk = true
        }
    }
    return isKidneyOk
}

app.put("/", (req,res) => {
    if(checkKidneyStatus()){
        users[0].kidneys.forEach(kidney => kidney.healthy = true)
        res.json({
            message :  `Updated every kidney to healthy`
        })
    }
    else{
        res.status(411).json({
            message : `You have got all healthy kidneys`
        })
    }
    // users[0].kidneys.forEach(kidney => kidney.healthy = true);
})

app.delete("/", (req,res) => {
    if(checkKidneyStatus()){
        const healthyKidneys = users[0].kidneys.filter(k => k.healthy === true);
        users[0].kidneys = healthyKidneys;
        res.json({
            message : `Removed kidney with the status unhealthy`
        })
    }else{
        res.status(411).json({
            message : `You don't have any unhealthy kidney`
        })
    }
})

app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
})