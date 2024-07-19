// anything after retun statment will not run

// function addTwoNumbers(number1 , number2){
//     return number1+number2;
// }

// const result = addTwoNumbers(24,56);
// console.log("Result: ",result);


//taking input with backticks 


// function loginUserMessage (username /*we can give default value too so that answer this function never gives undefined:➡️  [ username = "sam" ]  doen below */){

//  // if(!username){......} same thing as below jsut professionally
//     if(username === undefined){
//         console.log("please enter a username");
//         return; //why return here?? so that next line doesn't run that is below return statement
//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("krishna"));// username is present
// console.log(loginUserMessage());// returns undefined just loggin in as username is not present
// // therefore we can check if value if present in function or not using if statement⬆️⬆️


//-----------------------------------------------------------------------------------------------

function loginUserMessage (username = "sam" ){  // this function return : sam just logged in, we can override the value too
       if(!username){
           console.log("please enter a username");
           return;
       }
       return `${username} just logged in`
   }

   console.log(loginUserMessage("doremon"));  /* gives doremon jsut logged in as value is overiden */
