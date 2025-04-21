/*
converting one type of dat into another

*/

//Number to String
let a = 123;
console.log(a); //123
console.log(typeof a); //number
let b = String(a);
console.log(b); //"123";
console.log(typeof b); //string

//Boolean to String
let c = true;
console.log(c); //true
console.log(typeof c); //boolean
let d = String(c);
console.log(d); //"true";
console.log(typeof d); //string

//String to Number

let e = Number(d);
console.log(e); //"123"
console.log(typeof e); //number

let t = "1234tap";
let u = Number(t);
console.log(u, typeof u); //NaN,number

let v = parseInt(t); //"123tap"->123,  "Tap123"->NaN," 123tap "->123 ," 1 2 3 "->1//before start of any char space can be taken but after digit came and then space come then it return
console.log(v, typeof v); //1234,number

//Boolean to Number
let val = true;
console.log(val); //true
console.log(typeof val); //boolean
let newVal = Number(val);
console.log(newVal); //1
console.log(typeof newVal); //number

//Numeber to Boolean
let val1 = 1;
console.log(val1); //1
console.log(typeof val1); //number
let newVal1 = Boolean(val);
console.log(newVal1); //true
console.log(typeof newVal1); //boolean

//any number other than 0 if you converted into boolean is always true (1,123,-123,Infinity,-Infinity,"Tap","123","123jit",[1,2,3])
//any (0,NaN,null,"",[])->false(falsy value)

//"hello"->true
//[1,2,3]->true

//"hello"/2->NaN
//""->false
//[]->false
//0->false
//null->false
