//scope-> region in your program inside which variable is accessible

//global scope -> variable created out of all the functions all the if else, all the loops are are global variable and accessible everywhere in program
//in context of global variable and   global  scope var and let behave in the same manner
let a = 100;
function fun() {
  console.log(a); //100
}
console.log(a); //100
fun();

////////////////////
let b = 100;
function fun1() {
  console.log(b); //100
}
console.log(b); //100
fun1();

//functional scope->variable declare inside the function scope are accessible inside the fucntion only outside the function you cant access
//with the respect of function scope there is no difference between let and var
function fun3() {
  var c = 300; //same for let
  console.log(c); //300
}
//console.log(c); //refrence error out side the scope
fun1();

//block scope->//variable created inside the block and accessible only within the block
//var and let change their behaviour .......in the block scope let is not accessible out side ...on the other hand var is accessible out side the block becaue var will hoisted in global space

let temp = 30;

if (temp > 25) {
  let coolingTemp = temp - 25;
  console.log("Sever room  needs to be cooled by ", coolingTemp);
} else {
  let heatingTemp = 25 - temp;
  console.log("Sever room  needs to be heated by ", heatingTemp);
}

console.log(temp);
//console.log(coolingTemp); //let variables cant access out side the block
//console.log(heatingTemp); //let variables cant access out side the block

///////////////////////////////////////////////////////////////////
let vTemp = 30;

if (vTemp > 25) {
  var coolingTemp = vTemp - 25;
  console.log("Sever room  needs to be cooled by ", coolingTemp);
} else {
  var heatingTemp = 25 - vTemp;
  console.log("Sever room  needs to be heated by ", heatingTemp);
}

console.log(vTemp);
console.log(coolingTemp); //5
console.log(heatingTemp); //undefined

////always stick to let dont use var in your code as much as possible
