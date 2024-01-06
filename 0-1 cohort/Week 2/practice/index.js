//! Nodejs

//! Here I will practice everything about built in modules like file,path,http
// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// Reading File (Async)
// fs.readFile("hello.txt", "utf-8" , (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Creating File (Async)
// fs.writeFile("a.txt", "Hello there" , (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Appending File (Async)
// fs.appendFile("a.txt", ", I am Remo", (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Deleting a File
// fs.unlink("a.txt", (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Rename a file
// fs.rename("a.txt", "renamed.txt", (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Specifies the current directory
// console.log(__dirname);

// Specifies the current directory along with the current file
// console.log(__filename);

// Getting all the files from a folder
// fs.readdir("files", (err,data) => {
//     if(err) console.log(err)
//     if(data) console.log(data)
// })

// Create Files inside the folder
// const fileFolderPath = path.join(__dirname, "morefiles");
// for(let i = 1; i <= 5; i++){
//     fs.writeFile(`${fileFolderPath}/file-${i}.txt`, `Hello, I am file ${i}`, (err,data) => {
//         if(err) console.log(err)
//     if(data) console.log(data)
//     })
// }

// Http Server
// const PORT = 3000;

// http.createServer((req,res) => {
//     res.write("Hello World!");
//     res.end();
// }).listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })

//! Express
const express = require('express');
const app = express(); // Initialised the express app
const PORT = 3000;

app.get("/", (req,res) => {
    // res.send("Hello world !");
    res.status(200)
    res.send("<h1>Hello world</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})