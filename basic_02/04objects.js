// const tinderUser = new Object()
const tinderUser = {}
//adding detail of user
tinderUser.id = "123abc"
tinderUser.name = "krishna"
tinderUser.isLoggedIn = false
//console.log(tinderUser)
//--------------------------------------------------------
const regularUser = {  // yaha object ke andar object decalare krenge
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "karan",
            lastname: "saini"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.lastname)  // why "?" as koi value nahi h tabhi dega varna kuch ni return krega, if ? not used then har jagah if-else use krna padega
//---------------------------------------------------------

// merging objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1 , obj2)//  "{}" use of this is reccommended as it ensures that combined object comes within a parenthesis
const obj3 = {...obj1 , ...obj2}// mostly used - spread
//console.log(obj3);


const users = [// looping through many objects
    {
        id: 1,
        email: "dd@gmail.com"
    },
    {
        id: 1,
        email: "dd@gmail.com"
    },
    {
        id: 1,
        email: "dd@gmail.com"
    },
    {
        id: 1,
        email: "dd@gmail.com"
    }
]

users[1].email //accesing first object in users
//-------------------------------------------------------------

// we can convert object keys and its value in array and perform various function on it 👌👌 like loop etc
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// thsi property is used to check wheather object has that value or not as here it returns true

//---------------------------------------------------------------

//DE-STRUCTURING objects and JSON API

const course = {
    coursename: "javascript",
    price: "999",
    instructor: "krishna",
 college: "chitkara",
    classes: "G-24"
}
/* instead of extracting values like: "course.instructor or course.name" etc 
we use const{value to be extracted} = kaha se krni h? */

const{coursename : abc/*we renamed it as abc */ , college , classes} = course
console.log( abc); 

//---------------------------------------------------------------------------

//API- JSON  example:⬇️⬇️
// {
//     "name" : "krishna",
//     "course": "btech" , 
//     "price": "999"
// }

// API can also come in array form  
// check website (it has random api data) RANDOM_USER_ME API and we can use JSON formatter to read and study the data

[
    {},
    {},
    {}
]