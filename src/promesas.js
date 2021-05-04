//  const p1= Promise.resolve(1)
//  //console.log(1);

// p1.then(x=> x+5)
// .then(x => Promise.resolve(x + 5))
//  .then(x => Promise.reject('error algo succedio'))
//  .then(x => console.log=('esto no se va llamar'))
//  .catch(e=> console.log(e))

//   const delayed =x=> new Promise((resolve,reject) => setTimeout(() => resolve(x),900))

//  delayed(7)
//  .then(x => {
//      console.log(x)
//       return delayed(x + 7)
//  })


//  .then(x=> console.log(x))
//  .then(x=> Promise.reject("Se rechazo la promesa );"))
//  .catch(e => console.log(e))
 
//const getNombre =(iduser)=>{
// fetch(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
// .then(x=> {
//     return x.json()
// })
// .then(resultado =>{

//     console.log(resultado.userId);
//     fetch(`https://jsonplaceholder.typicode.com/users/${resultado.userId}`)
//     .then(x=> {
//         return x.json()
//     })
//     .then(userres=>{
//            console.log(userres.username);
//     })
// })
// }
//  getNombre(80);
//  const getNombreAsync  = async (iduser)=>{
//     try{
//         // const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
//         // const post= await resPost.json()
//         // console.log(post.body);
      
//         const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//         const post2 = await resUser.json()
//         console.log(post2.username);



//         const resUser2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//         const post3 = await resUser2.json()
//         console.log(post3.username);
        
        
        
//     }
//      catch{
//         console.log();
//     }
//  }
//  getNombreAsync(80)







 const getNombreAxios  = async (iduser)=>{
    try{
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
        const resusuarios = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resusuarios.data.id)

        const respos2= await axios(`https://jsonplaceholder.typicode.com/posts/${iduser}`)
        const resusuarios2 = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resusuarios2.data.name)
        
        
    }
     catch{
        console.log("error");
    }
 }
 getNombreAxios(80)









 

// $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
//     $.get('https://jsonplaceholder.typicode.com/users',(res)=>{
        
//     })
// })


