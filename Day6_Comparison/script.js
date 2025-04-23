console.log(5 == "5"); //true,internally js engine converts like this Number('5') ->5 then compare
console.log(5 === "5"); //false
console.log(true == 1); //true,true will convert to 1 then compare
console.log(true === 1); //false
console.log(true == "1"); // true
console.log(true === "1"); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(0 == ""); //true//""->false->0
console.log(0 === ""); //false
console.log(null == false); //false
console.log(0 == undefined); //false
console.log(NaN == NaN); //false
console.log("false" == false); //false
console.log("001" == 1); //true
console.log(null == 0); //false
console.log(0 == undefined); //false
