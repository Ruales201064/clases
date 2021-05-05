const pacientes = [{
 No_documento: 1006178654,
 nombre: 'Juan David',
 apellidos:'Ruales Delado',
 ciudad:'cali',
 telefono:3136153521,
 estrato: 1
},{

No_documento: 192888398,
 nombre: 'Julian',
 apellidos:'pina caicedo',
 ciudad:'medellin',
 telefono:3117440458,
 estrato: 2
},{
 No_documento: 41923721,
 nombre: 'Alejandra',
 apellidos:'Marin',
 ciudad:'Bogota',
 telefono:3127418164,
 estrato: 3
},{ 
  No_documento: 199298737,
  nombre: 'Maicol steven',
  apellidos:'Salgado Ortiz',
  ciudad:'cali',
  telefono:3206487439,
   estrato: 1
 },{
    No_documento: 1002837748,
    nombre: 'Valentina ',
    apellidos:'Rodriguez Mejia',
    ciudad:'medellin',
    telefono:3120837740,
    estrato: 4   



}];




 const getpacientes=()=>{
  return new Promise((resolve,reject)=>{
      if(pacientes==0){
        reject('no se encontrarons los datos del array')
      }
      setTimeout(()=>{
          resolve(pacientes);
      },900);

  })

 }
async function getusers(){


    try{
       const getDatosF=await getpacientes();

       const documentos= await getDatosF.map(x=> x.No_documento)
       console.log(documentos);

       const name= getDatosF.map(n=> n.nombre)
           console.log(name);
           
           const surname= await getDatosF.map(a=> a.apellidos)
           console.log(surname);
       
           const city= await getDatosF.map(c=> c.ciudad)
           console.log(city);
       
           const telephone= await getDatosF.map(t=> t.telefono)
           console.log(telephone);
       
           const stratum= await getDatosF.map(s=> s.estrato)
           console.log(stratum);






    }catch(err){
     console.log(err.message)

    }


}
getusers()


// getpacientes().then(res=>{
//     const documentos= res.map(x=> x.No_documento)
//     console.log(documentos);

//     const name= res.map(n=> n.nombre)
//     console.log(name);
    
//     const surname= res.map(a=> a.apellidos)
//     console.log(surname);

//     const city= res.map(c=> c.ciudad)
//     console.log(city);

//     const telephone= res.map(t=> t.telefono)
//     console.log(telephone);

//     const stratum= res.map(s=> s.estrato)
//     console.log(stratum);


    



// })
    
 















// function getpacientes(){
//     return new Promise((resolve,reject)=>{
//       if(pacientes==0){
//         reject('error de conexion');

//       }  
//      setTimeout(()=>{
//          resolve(pacientes);
//      },1500);

//     })
    
     
// }






// getpacientes().then((resol)=>{
//    console.log(resol); 

// })





