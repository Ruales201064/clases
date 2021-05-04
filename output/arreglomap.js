"use strict";

var suma = function suma(ns) {
  var acumalado = 0;

  for (i = 0; i < ns.length; i++) {
    acumalado += ns[i];
  }

  return acumalado;
};

var numeros = [1, 2, 3, 4, 5]; // const multiplcados = numeros.map(x => x * 2 )
// console.log(multiplcados)
// const parejas = numeros.map(x => [x,x])
// console.log(parejas)

var mascotas = [{
  nombre: "Carolina",
  edad: 12,
  raza: "perro"
}, {
  nombre: "Rocky",
  edad: 7,
  raza: "perro"
}, {
  nombre: "Zeus",
  edad: 4,
  raza: "gato"
}, {
  nombre: "michin",
  edad: 2,
  raza: "gato"
}];
var edades = mascotas.map(function (x) {
  return x.edad;
});
console.log(edades);
var resultado1 = suma(edades);
console.log(resultado1 / edades.length);