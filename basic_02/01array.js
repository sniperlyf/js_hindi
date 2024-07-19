const myArr = [0,1,2,3,4,5,6];
const myHeros = ["spiderman" , "superman" , "saktimaan"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2);
console.log("-------------------------------------");

//array methods

/*push values in aray*/
myArr.push(8);
myArr.push(14);
myArr.pop();

console.log(myArr)
console.log("-------------------------------------");

myArr.unshift(9);//push value in front of array
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log("-------------------------------------");

//SLICE AND SPLICE

console.log("A" ,  myArr);// A is name of array
const myn1 = myArr.slice(1,3);
console.log(myn1);


console.log("B" , myArr , "to differentiate bw slice and splice arr[B] is written");

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);



// A is [0,1,2,3,4,5,6,8] --- after slicing from index 1 to 3(3 se pehle wali)--- it gives output [1,2]
// B is [0,1,2,3,4,5,6,8]
// C is [ 0, 4, 5, 6, 8 ] -- after splicing from 1 to 3 --- it gives output [ 1, 2, 3 ]

// therefore slicing(it extract the part out) and splicing (it removes or replace the part out)

 