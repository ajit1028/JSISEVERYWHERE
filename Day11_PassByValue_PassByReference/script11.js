//pass by value -> changing on the copy value does not effect on origional value
let a = 100;
let b;
b = a;
console.log(b); //100
console.log(a); //100
b = 200;
console.log(b); //200
console.log(a); //100

// pass by refrence -> changing on copy object will change the effect on origional object

let objA = {
  name: "Ajit",
  age: 25,
  coding: function () {
    console.log(" i code daily"); // in this case undefind is print because function is not returning anything
  },
};

let objB = objA;

console.log(objA); //{ name: 'Ajit', age: 25, coding: [Function: coding] }
console.log(objB); //{ name: 'Ajit', age: 25, coding: [Function: coding] }
console.log(objB.coding());

objB.name = "bholu";
objB.coding = function () {
  return "code fast and improve problem solving";
};
console.log(objA); //{ name: 'bholu', age: 25, coding: [Function (anonymous)] }
console.log(objB); //{ name: 'bholu', age: 25, coding: [Function (anonymous)] }
console.log(objB.coding());
