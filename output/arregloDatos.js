"use strict";

var datos = [{
  id: 1,
  title: 'Iron Man2',
  year: 2004
}, {
  id: 2,
  title: 'Rapido y furioso',
  year: 2001
}, {
  id: 3,
  title: 'Avangers Endgame',
  year: 2019
}];
var ciudades = [{
  id_ciu: 101,
  nombre: 'cali',
  habitantes: 4046.230
}, {
  id_ciu: 102,
  nombre: 'medellin',
  habitantes: 5056.525
}, {
  id_ciu: 104,
  nombre: 'Bogota',
  habitantes: 9875.917
}]; //const ciudades=[];

function capitales() {
  return new Promise(function (resolve, reject) {
    if (ciudades == 0) {
      return reject('no se encontrarons los datos');
    }

    setTimeout(function () {
      resolve(ciudades);
    }, 2000);
  });
}

capitales().then(function (respuesta) {
  var names = respuesta.map(function (Y) {
    return Y.nombre;
  });
  console.log(names);
  var code = respuesta.map(function (c) {
    return c.id_ciu;
  });
  console.log(code);
  var population = respuesta.map(function (z) {
    return z.habitantes;
  });
  console.log(population);
});

function getuser() {
  return new Promise(function (resolve, reject) {
    if (datos == 0) {
      return reject('No se encontro el arreglo');
    }

    setTimeout(function () {
      resolve(datos);
    }, 1000);
  });
}

getuser().then(function (res) {
  try {
    var titles = res.map(function (x) {
      return x.title;
    });
    console.log(titles);
    var codigo = res.map(function (cod) {
      return cod.id;
    });
    console.log(codigo);
    var years = res.map(function (Y) {
      return Y.year;
    });
    console.log(years);
  } catch (err) {
    console.log(err.message);
  }
}); //const datos=[];
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