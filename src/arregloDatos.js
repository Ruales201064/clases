const datos=[{
id:1,
title: 'Iron Man2',
year: 2004
},{
id: 2,
title: 'Rapido y furioso',
year: 2001
},{
   id:3,
   title:'Avangers Endgame',
   year: 2019  

}];




const ciudades =[{
    id_ciu: 101,
    nombre: 'cali',
    habitantes: 4046.230
 },{
    id_ciu: 102,
    nombre: 'medellin',
    habitantes: 5056.525
 },{
   id_ciu: 104,
   nombre: 'Bogota',
   habitantes: 9875.917
 
 }];

//const ciudades=[];
 function capitales(){
  return new Promise((resolve,reject)=>{
    if(ciudades==0){
      return reject('no se encontrarons los datos');
    }
    setTimeout(()=>{
      resolve(ciudades);
  
    },2000);
  })
  
  }
  capitales().then(respuesta=>{
    
  
    const names=respuesta.map(Y=> Y.nombre)
    console.log(names);
  
    const code=respuesta.map(c=> c.id_ciu)
    console.log(code);
  
    const population= respuesta.map(z=>z.habitantes)
    console.log(population);
    
    
  });
  
  





 function getuser(){
  return new Promise((resolve,reject)=>{
    if(datos==0){
      return reject('No se encontro el arreglo');
    }
        setTimeout(()=>{
           resolve (datos);
       },1000);
  })
 }


 getuser().then(res=>{

  try{
    const titles= res.map(x=> x.title)
    console.log(titles)
  
    const codigo=res.map(cod=>cod.id)
    console.log(codigo)
  
    const years=res.map(Y=> Y.year)
    console.log(years)
  }catch(err){
     console.log(err.message);
  }
  

 });

















//const datos=[];

// const getDatos = (()=>{
//   return new Promise((resolve,reject)=>{
//     if(datos.length===0){
//       return reject(new Error('No existen Datos'))
//     }
//       setTimeout(()=>{
//           return resolve(datos);
//       },1500);
//   })
   
// })

//   const res=  async  (iduser)=>{

//     try{
//       const fecthdatas = await  getDatos(`${iduser}`);
//       const fecthdatas2 = await  getDatos(`${fecthdatas.data.id}`);
//       console.log(fecthdatas2.data.title);
  
//     }catch(err){
//        console.log(err.message);
//     }

//   }
  
 
// res(1);