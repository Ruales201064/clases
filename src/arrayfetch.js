

// .then(x=> x.json())
// .then(x=> console.log(x));

const getusuarios=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(()=>{
                fetch(`https://jsonplaceholder.typicode.com/users`)
              
            })
        },900);
  
    })
  
   }

   getusuarios().then((resol=> resol.json())=>{
     
    
     })
     console.log(resol); 