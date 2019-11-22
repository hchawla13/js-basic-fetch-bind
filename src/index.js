const url = 'https://jsonplaceholder.typicode.com/todos'
//const vlc = require('./var-let-const')
//const thisbind  = require('./this-bind')
//const prototype = require('./prototype')
//const call  = require('./call')
//const fatArrow  = require('./fat-arrow')
//const objCopy  = require('./obj-copy')
const closure = require('./closure')

// // Getting data by callback
// // ----------------------------------------
// // const getData = (url,callback) =>{
// //     fetch(url)
// //     .then((res)=> res.json())
// //     .then((json)=> {
// //         callback(json);
// //     })
// // }
// // getData(url, (data)=>{
// //     console.log("data got is",data)
// // });
// // ----------------------------------------


// // getting data by promises
// // ----------------------------------------
// // const p = new Promise((resolve,reject)=>{
// //     fetch(url)
// //     .then((res)=>res.json())
// //     .then((json)=>{
// //         resolve(json)
// //     })
// // })
// // p.then((res)=>{
// //     console.log("result of promise is ",res)
// // })
// // ----------------------------------------


//discard this one for now
// const getData = (url) =>{
//     return new Promise((resolve,reject)=>{
//         fetch(url)
//         .then((res)=> res.json())
//         .then((json)=> {
//             resolve(json);
//         })
//     })
// }
// const data = getData((res)=>{
//     console.log("data received from promises with named function",res)
// })
console.log("deployment 1")
    

// let a = 'abc1'
// function f1(){
//     ia = 'abc'
//     console.log("inside f1",a)
// }

// f1();
// //var a = 'abc2'
// console.log("outside f1",a)
// console.log("inside f1 accessed outside",ia)