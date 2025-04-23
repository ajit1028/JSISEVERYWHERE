//Lexical scope=> (also called static scope) means that a variable's scope is determined by its position in the source code — specifically, where it was written.

// A function can access variables defined in its outer (parent) scope, because of where it is physically written in the code.

//closures->"A closure gives you access to an outer function’s variables from an inner function, even after the outer function has returned."
function outerFunction() {
  console.log("Outer Funtion started its execution");
  let outerVariable = "I am from outside!";

  function innerFunction() {
    console.log("Inner Funtion started execution");
    console.log(outerVariable);
    console.log("Inner Funtion started execution");
  }
  console.log("Outer Funtion finish its execution");

  return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction() returns innerFunction
closureFunc(); // still has access to outerVariable

//////////////////////////////

function counter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
  };
}
let counterA = counter();
counterA(); //1
counterA(); //2

let counterB = counter();
counterB(); //1
counterB(); //2
