const marvelHeros = ["thor" , "spiderman" , "ironman"]
const dcHeros = ["superman" , "flash" , "aquaman"]

//pushing dc heros in marvel thinking they will merge BUT NO Array ke andar array aa gya
// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log("-------------------------------------");

//using concat IT truly merges the both array
// const arr1 = marvelHeros.concat(dcHeros)
// console.log(arr1);
// console.log("-------------------------------------");

//USING SPREAD 
// const arr2 = [...marvelHeros,...dcHeros]
// console.log(arr2); 

//RARE CASE SITUAtion ARRAY ke andar ARRAY ke andar ARRAY
//using FLAT -- if we want all array to be in same array and same line 
const arr3 = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13]]] //depth of thsi array is 3[arr(arr(arr))]
const fixedarr = arr3.flat(Infinity)
console.log(fixedarr);

// if you wanna convert any type to arr use 'FROM'
// console.log(Array.isArray("krishna"))
// console.log(Array.from("krishna"))
// console.log(Array.from({name: "krishna"}))// you have to tell ki kya array me convert krna h?

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))