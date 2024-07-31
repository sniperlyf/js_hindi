const user = {
    username: "krishna",
    price: 999,
    /*whenever we wanna talk about current context we use "this" keyword , here it refer to context within brackets as username can be changed if new user enter his name*/
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage( )

console.log(this);// global context me empty show krega 

