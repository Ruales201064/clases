const {taskOne,taskTwo} = require('./tasks');

async function main(){
console.time('intervalo');
const valueOne = await taskOne();
const valueTwo= await taskTwo();
console.timeEnd('intervalo');

console.log('Task One returned',valueOne);
console.log('task two returned',valueTwo);
}
main()
