// immediately invoked function expressions 
/* 1. jab global scope wale function pollution se bachna ho tab iffe use krte h
    2. immediately function call kr lete h uske baad*/

    //     ()                 ()
    //     ⬆️                ⬆️
    //  function ke lie      execution ke lie
    // done like  ()()

    // this is named iffe ⬇️
    (function chai(){
        console.log(`db connected`);
    })
    ();
    // we can execte arrow function as well but use ; before as iffe doesnt know where to end the invoked function
    // we can add ${} to add variable name and call it when fucntion is executed
    // we used two iffe together✔️
    // we passed parameter is iffe✔️
    // this is named iffe ⬇️
    ((name) => {
        console.log(`db connected ${name}`);
    })("karan")