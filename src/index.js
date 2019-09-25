const url = 'https://jsonplaceholder.typicode.com/todos'

// Getting data by callback
// ----------------------------------------
// const getData = (url,callback) =>{
//     fetch(url)
//     .then((res)=> res.json())
//     .then((json)=> {
//         callback(json);
//     })
// }
// getData(url, (data)=>{
//     console.log("data got is",data)
// });
// ----------------------------------------


// getting data by promises
// ----------------------------------------
// const p = new Promise((resolve,reject)=>{
//     fetch(url)
//     .then((res)=>res.json())
//     .then((json)=>{
//         resolve(json)
//     })
// })
// p.then((res)=>{
//     console.log("result of promise is ",res)
// })
// ----------------------------------------


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
    
