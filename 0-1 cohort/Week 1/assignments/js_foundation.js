// 1. Create a counter in Javascript (counts down from 30 to 0)

// let timer = 30;
// function countDown(){
//     console.log(timer)
//     timer--;
//     if(timer === 0){
//         clearInterval(intervalId);
//         console.log("Countdown complete!");
//     }
// }

// const intervalId = setInterval(countDown,1000)

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

const start = new Date().getTime();

setTimeout(() => {
    const end = new Date().getTime();
    console.log(`${end - start} ms`)
},1000)


// 3. Create a terminal clock (HH:MM:SS)
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

function isPrimeNo(x){
    for(let i = 2; i <= x - 1; i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}

const isPrime = isPrimeNo(4);

if(isPrime) console.log("It is prime");
else console.log("It is not prime")