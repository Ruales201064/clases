"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const reducer =(acumulador)
//const reducido =[1,2].reduce((acc,el)=> acc+el,0)
//console.log(reducido);
var numeros = [1, 2, 3, 4, 5]; // const reducido2=numeros.reduce((acum,ele)=> acum+ele,0)
// console.log(reducido2);

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
var indexed = mascotas.reduce(function (acc, ele) {
  return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, ele.nombre, ele));
}, {});
console.log(indexed['Rocky']);
var anidado = [1, [2, 3], 4, [5]];
var plano = anidado.reduce(function (acc2, el2) {
  return acc2.concat(el2);
}, []);
console.log(plano);