const name = "Krishna";
const midname = " Saini";

//console.log(name + midname + " Abhoria");     //outdated h ase likhna instead try

console.log(`my name is -->${name} and my midname is -->${midname} and my last is Abhoria`);//use backtag i.e. [``] and add ${variable name}

const game = new String('pac-man is good game')//write thsi command in cosole in browser
console.log(game.length);
console.log(game[2]);
console.log(game.__proto__);//returns object {it has a lot of values , its not empty as it seems}   you can see all values in console of chrome browser
console.log(game.toLocaleUpperCase());
console.log(game.charAt(2));//at which position is the character

console.log((game.substring(0,6)));//slicing  last se pehli value tak print hota h
console.log(game.slice(-16,20));//gives value counting in reverse then print normally
console.log(game.slice(-19,20));
console.log(game.slice(-20,17));

const url = "krish-singh-saini-1@gmail.com";
console.log(url.replace('singh-saini-1','ABHORIA'));//these changes are made in copy of that data stack
console.log(url.includes('saini'));//this cahnge is seen in actual data stack 

const str = 'the fox was quicker than the rabbit. ';
const words = str.split(' ',5)//split keywords on basis of space[' ']; '5' here is limit i.e. till 5 words split the sentence;
console.log(words);

console.log(url.split('-'));