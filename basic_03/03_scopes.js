if(true){  // this is block scope as declared in {}
    let a = 10
const b = 20
var c = 30
}

//console.log(a); gives error as globally declare ni kia
//console.log(b); gives error
//console.log(c); // prints even if not declared globally

// scope = {}

// function me function ke andar scope
// NESTED SCOPES

// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()

if(true){
    const username = "krishna";
    if(username === "krishna"){
        const webs = " syt";
        //console.log(username + webs);
    }
    // console.log("webs"); gives error
}
// console.log(username)gives error as it is block scope

//+++++++++++++++++++++ intresting +++++++++++++++++++
function addone(num){ // function h dono
    return num+1;
}
console.log(addone(19)); // can be written anywhere and will be executed 

const addtwo = function(num){  // like a variable called expresion
    return num + 2 
}
addtwo(5) // can only be written after fucntion declaration called function hoisting