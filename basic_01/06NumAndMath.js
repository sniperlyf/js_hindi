const score = 100
console.log(score);

const num = new Number(100)
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(2));//gives decimal 2--> 100.00

const other = 23.8964
const other1 = 123.8964
console.log(other.toPrecision(4));//decimal se pehle milti h priority 
console.log(other1.toPrecision(3));//roundoff kar deta h value

const hund = 10000000               
console.log(hund.toLocaleString('en-IN'));

console.log('-----------------------------------');

//**************************************MATHS********************************************************* */

console.log(Math);
console.log(Math.round(5.68338));
console.log(Math.ceil(5.28338));//takes upper value ie 6
console.log(Math.floor(5.18338));//takes lower value ie 5
console.log(Math.sqrt(5.18338));
console.log(Math.min(6,4,52,37,8,9));
console.log(Math.max(6,4,52,37,8,9));
console.log('-----------------------------------');

//if we want random values bw 10 and 20 then??

const min = 10
const max = 20

console.log(Math.floor( Math.random() * ( max - min + 1 ) + min ));
console.log(Math.floor( Math.random() * ( max - min + 1 ) + min ));
console.log(Math.floor( Math.random() * ( max - min + 1 ) + min ));


