// function counter(count){   
//     setInterval(() => {
//         console.log(count)
//         count++
//     }, 1000)
// }

function counter(count){
    setTimeout(() => {
        console.log(count);
        count++;
        counter(count);
    }, 1000)
}

// counter(0);

const fs = require("fs");
// reading file 
// fs.readFile('remo.txt', "utf-8", (err,data) => {
//     if(err) throw err
//     if(data) console.log(data);
// })

// writing file
// fs.writeFile("remo.txt", "Hello, My name is Sharadindu Das", (err,data) => {
//     if(err) throw err
// })

fs.readFile('remo.txt', "utf-8", (err,data) => {
    if(err) throw err
    data = data.split(" ").filter(x => x != "").join(" ")
    fs.writeFile('remo.txt', data, (err,data) => {
        if(err) throw err
        if(data) console.log(data)
    })
})

function clock(){
    // const time = new Date();
    // const hrs = time.getHours();
    // const mins = time.getMinutes();
    // const sec = time.getSeconds();
    // console.log(`${hrs}:${mins}:${sec}`)

    const time = new Date().toLocaleTimeString();
    console.log(`${time}`)
}


setInterval(clock,1000)