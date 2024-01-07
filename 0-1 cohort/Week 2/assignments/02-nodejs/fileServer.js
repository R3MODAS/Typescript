/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /files/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const fileName = ['a.txt','b.txt','c.txt'];

// app.get("/", (req,res) => {
//   fileName.forEach((file) => {
//     const filePath = path.join(__dirname, "files", file);
//     fs.writeFile(filePath, `Hello from ${file}`, (err,data) => {
//       if(err) console.log(err)
//       if(data) console.log(data)
//     })
//   })
//   res.send("Files are created successfully")
// })

app.get("/files", (req,res) => {
  fs.readdir("files", "utf-8", (err,files) => {
    if(err) return res.status(500).json({ error: 'Failed to retrieve files' });
    res.json(files)
  })
})

app.get("/files/:filename", (req,res) => {
  let file = req.params.filename;
  const filePath = path.join(__dirname, "files", file);
  fs.readFile(filePath, "utf-8", (err,data) => {
    if (err) {
      return res.status(404).send('File not found');
  }
  res.send(data);
  })
})

app.all("*", (req,res) => {
  res.status(404).send('Route not found')
})

app.listen(3000, () => {
  console.log(`Listening on port http://localhost:3000`);
})

module.exports = app;