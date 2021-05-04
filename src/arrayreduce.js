// const reducer =(acumulador)
//const reducido =[1,2].reduce((acc,el)=> acc+el,0)
//console.log(reducido);

const numeros=[1,2,3,4,5]
// const reducido2=numeros.reduce((acum,ele)=> acum+ele,0)
// console.log(reducido2);

const mascotas =[
    {nombre: "Carolina",edad:12,raza:"perro"},
    {nombre: "Rocky",edad:7,raza:"perro"},
    {nombre: "Zeus",edad:4,raza:"gato"},
    {nombre: "michin",edad:2,raza:"gato"},

    
];
const indexed=mascotas.reduce((acc,ele)=> ({
    ...acc,
    [ele.nombre]: ele,
}),{})
console.log(indexed['Rocky']);

const anidado =[1,[2,3],4,[5]]
const plano = anidado.reduce((acc2,el2)=> acc2.concat(el2),[])
console.log(plano)