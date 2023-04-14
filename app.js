//I have to create functions for each time
const body = document.querySelector('body');
const timeContainer = document.querySelector('#timeZone');

const appendHours = document.createElement('span');
const appendMintues = document.createElement('span');
const appendSeconds = document.createElement('span');

const getHours =()=>{
    const date = new Date();
    let hours = date.getHours()

    if(hours > 12){
        hours = hours - 12;
    }
    return hours; 
}

const getMintues= () => {
    const date = new Date()
    const mintues = date.getMinutes()
    // console.log(mintues)
    return mintues
}

const getSeconds = () => {
    const date = new Date()
    const seconds = date.getSeconds()
    // console.log(seconds)
    return seconds
}

const getTime = () => {
    const processHours = getHours();
    const processMintues = getMintues();
    const processSeconds = getSeconds();
    
    const processTime = `${processHours}:${processMintues}:${processSeconds}`
    console.log(processTime)
    appendTime(processHours, processMintues, processSeconds)
    // return processTime
}

function appendTime(hours, mintues, seconds){


    appendHours.innerText = `${hours}`
    appendMintues.innerText = `:${mintues}`
    appendSeconds.innerText = `:${seconds}`

    timeContainer.append(appendHours ,appendMintues, appendSeconds)
    body.append(timeContainer)
}

// const testing = setInterval(()=> {
//     getTime()
// }, 1000)

getTime()

const testing =setInterval(()=> {
    getTime()
}, 1000)

// setTimeout(()=> {
//     clearInterval(testing)
// }, 5000)


// getHours();
// getTime();  































// let time = new Date();


// const displayTime = () => {
//     let time = new Date();

//     let date = time.getDate()
//     let hours = time.getHours()
//     let seconds = time.getSeconds()

//     // setInterval(() => {
//     //     seconds = time.getSeconds()
//     //     console.log(seconds)
//     // }, 1000)

//     console.log(time);
//     console.log(date);
//     console.log(hours); 
// }


// const body = document.querySelector('body')
// let seconds = time.getSeconds();

// let displaySeconds = document.createElement('p')
// // displaySeconds.innerText = seconds; 

// body.append(displaySeconds)

// console.log(seconds)
// // setInterval(() => {
// //     seconds++
// //     displaySeconds.innerText = seconds; 
// //     console.log(seconds)
// // }, 1000)


// // displayTime(); 
