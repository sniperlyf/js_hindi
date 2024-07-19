// objects can be declared as literal and as constuctor(make singleton object)
// we can change or overide values of email etc by using '='
// if we dont wanna change the value we can freeze the object :   Object.freeze(JsUser)

//declaring symbol
const mysym = Symbol("keyy1809")


//declaring object
const JsUser= {
    name: "krishna",
    [mysym]: "2210991809krishna",// when jsuser is orinted , this speciually tells that it is a symbol rather than showing it as normal key
    age : 20,
    "full_name": "krishna saini",
    location: "rajpura",
    email: "sniperlyfe564@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}


//accessing objects
console.log(JsUser.email)//     {.Method} can't access the string type in object only next method can , example "full_name"
console.log(JsUser["email"])
console.log(JsUser["full_name"])

//accessing symbol
console.log(JsUser[mysym])
console.log(JsUser)

// greeting user with function
JsUser.greeting = function(){
    console.log("hey there Js User")
}
console.log(JsUser.greeting);//function passes only reference rather than function executing
console.log(JsUser.greeting());//execute the function

/*what if i want my user name there, we use backstring and interpol the data */
JsUser.greetingtwo = function(){
    console.log(`hey there Js User,${this.email}`)
}
console.log(JsUser.greetingtwo())
