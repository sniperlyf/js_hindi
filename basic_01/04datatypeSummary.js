//  **************************PRIMITIVE DATTATYPES***********************

//7 types: string,number , boolean, null, empty, undefined, symbol,BigInt



const id= Symbol('123')
const anaid =Symbol('123')

console.log(id === anaid);//return false as symbol is used to identify uniquely




// *******************************REFERENCE DATATYPE(non primitive)******************************

//array , objects , functions


const hero = ["sakti" , "jublimon" , " spiderman"]
let myobj = {
    name: "krishna",
    age : 18
}

const myfunc = function(){
    console.log("hello world");
}


//console.table(typeof[id , hero , myobj , myfunc])