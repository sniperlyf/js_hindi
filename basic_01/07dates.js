let mydate = new Date()
console.log(mydate);

console.log('-----------------------------------');

console.log(mydate.toString());

console.log('-----------------------------------');

console.log(mydate.getDate(),(" -> today's date"));//gives date

console.log('-----------------------------------');

console.log(mydate.getHours(),'hr',mydate.getMinutes(),'min',mydate.getSeconds(),'sec');

console.log('-----------------------------------');

console.log(mydate.toLocaleTimeString());

console.log('-----------------------------------');

console.log(mydate.getMilliseconds(),('milisec'));

console.log('-----------------------------------');

console.log(mydate.getFullYear(),(' -> current year'));

console.log('-----------------------------------');

//syntax 1  (yy-mm-dd-hr-min-sec)
let myCreatedDate = new Date(2024,3,18,8,3)// 0 -> janurary, 1-> feb  and so on.......
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());

console.log('-----------------------------------');

//syntax 2  (yy-mm-dd)
let myCreatedDate1 = new Date("2024-01-18")// 1 -> janurary, 2-> feb  and so on.......  
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate1.toLocaleDateString());
console.log(myCreatedDate1.toLocaleString());

console.log('-----------------------------------');

//syntax 3 (mm-dd-yy)
let myCreatedDate2 = new Date("03-18-2024")// 0 -> janurary, 1-> feb  and so on.......
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleDateString());
console.log(myCreatedDate2.toLocaleString());

console.log('-----------------------------------');


//timestamp thatis millisec from 1-1-1970 (default first date)

let mytime = Date.now()
console.log(mytime,' -> time in milisec from 1970');//give that milisec from 1970
console.log(myCreatedDate.getTime(),' -> time in milisec from 1970');
console.log(Math.floor(Date.now()/1000),' -> time in sec from 1970');//to get time in sec div by 1000

console.log('-----------------------------------');

// let newdate = new Date()//you can specify what type and how you want the date to be seen
// newdate.toLocaleString('default',{ //use ctrl+space to see all the property of this object
//     era:"long",
//     dateStyle:"medium",
//     localeMatcher:"best fit"
// })
