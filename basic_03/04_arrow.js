const user = {
    username: "krishna",
    price: 999,
    /*this function only works in object not inside a function */
    /*whenever we wanna talk about current context we use "this" keyword , here it refer to context within brackets as username can be changed if new user enter his name*/
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage( )
// console.log(this);// global context me empty show krega 

// function chai(){
//     console.log(this);
// }
// chai() // gives a lot of values


// const chai = function (){
//     let username = "karan"
//     console.log(this.username); 
// }
// chai() // returns undefined but in arrow function it returns '()' that means value is not there instead of undefined

// const chaii = () => {
//     let username = "krish"
//     console.log(this);
// }
// chaii()

//------------------------------AAROW FUNCTION-----------------------------

/*you can write it as following 
1.  */
const addNumber = (num1 , num2) => {
    return num1 + num2 
}
console.log(addNumber(8,9));
/*2. */
const addNumbe = (NUM1 , NUM2)  => NUM1 + NUM2 // when single line statement is there use this
console.log(addNumbe(8,9));

/*3.  */
const addTwo = (num3 , num4 ) => (num3 + num4)
console.log(addTwo(8,9 ));