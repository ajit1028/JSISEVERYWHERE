//functions are first class citizen(stored in variable, passed to functions,returned from functions)

function exmp(user) {
  console.log(user);

  let c = {
    name: "Bholu",
    age: 25,
    profession: "teacher",
  };
  return c;
}

let a = {
  name: "Ajit",
  age: 25,
  profession: "developer",
};

console.log(exmp(a));

////function in js are also objects so  it will be created inside heap
// it has properties name(function name) and length(length of parameter)
// it has further provided behavinour means functions have also functions that is call(),apply(),bind()

function cb(a, b) {
  console.log(a + b);
}

// console.log(add.name); //add
// console.log(add.length); //2

// add.call;

//Higher Order Functions -> the functoions that take collects  to another functions  as argument are called as higher order functions
//Call back functions -> the functions that are passed to another functions are called as higher order functions
function hoc(fun) {
  fun(100, 200);
}
hoc(cb); //hoc-> higher order functions because it is taking input cb as an argument, cb is call back functions because it is an passed as a paramenter
