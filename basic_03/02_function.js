// let us make a shopping cart where we dont know how many items will the user add so what do we do? we create a function that can take multiple input without knowing how many items will be added
// that is we dont knwo how many argument aane wale h and we have to add price of items too

//----------------------------------------------------------------------------------

// function calculateCartPrice(item1 , item2 , ...num1){
//     return num1;
// }

//console.log(calculateCartPrice(2)); // return 2 but what if i have taken more items , not jsut only 1
// therefore we use rest or spread operator that is : ...num1  ( same thing as spread)

//console.log(calculateCartPrice(200 , 400 , 500 , 799, 300 ,455)); // returns an array as item1 = 200 , item2 = 400 baki sab ...num1 me


// passing object in a function:

// const user = {
//     username: "hitesh",
//     price: 199,
//     subject: "hindi"
// }
// function PaasingObjectInFunction(anyobject){
//     console.log(`username is  ${anyobject.username} and price is ${anyobject.price} and his subject is ${anyobject.subject}`);  /* anyobject.(object) is case sensitive , if we wrote prices instead of price , it will give price is undefined */
// }
// /* calling above function*/ PaasingObjectInFunction(user);
// /*another method to pass and call function is to directly pass the object */  PaasingObjectInFunction({username: "krishna" , price: 2873})

//---------------------------------------------------------------------------------------------------------


// passing an array in function

const Myarray = [100 , 200 , 300 , 400 , 500]
function ReturnSecondValue (getArray) {
    return getArray[1];
}
console.log(ReturnSecondValue(Myarray));// gives 200
/*another method*/ console.log(ReturnSecondValue([100 , 200 , 300 , 400 , 500]));// gives 200