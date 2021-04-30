// const p1= Promise.resolve(1)
// console.log(1);
// p1.then(x=> x+5)
// .then(x => Promise.resolve(x + 5))
// .then(x => Promise.reject('error algo succedio'))
// .then(x => console.log=('esto no se va llamar'))
// .catch(e=> console.log(e))
// const delayed =x=> new Promise((resolve,reject) => setTimeout(() => resolve(x),900))
// delayed(7)
// .then(x => {
//     console.log(x)
//     return delayed(x + 7)
// })
// .then(x=> console.log(x))
// .then(x=> Promise.reject("Se rechazo la promesa );"))
// .catch(e => console.log(e))
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(x=> x.json())
// .then(x=> console.log(x))

// $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
//     $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
//     })
// })
"use strict";