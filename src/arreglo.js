const numeros=[1,2,3,4,5,6,7,8,9]
const mascotas =[
    {nombre: "Carolina",edad:12,raza:"perro"},
    {nombre: "Rocky",edad:7,raza:"perro"},
    {nombre: "Zeus",edad:4,raza:"gato"},
    {nombre: "michin",edad:2,raza:"gato"},

    
];
// console.log(numeros,mascotas)
// const numerosfiltrados = numeros.filter(x => x< 5 )
// console.log(numerosfiltrados,numeros);
const perros =mascotas.filter(x => x.raza=='perro')
const gatos = mascotas.filter(x=> x.raza=='gato')
console.log(gatos,mascotas)
console.log(perros,mascotas)