// {
//     key:value,
//     key:value,
//     key:value,

//fucntionName : fuction declaration
// };

let a = {
  name: "BMW",
  cost: 75.6,
  milage: 8.6,

  start: function () {
    console.log("car is starting");
  },
  stop: function () {
    console.log("car is stoping");
  },
  accelerate: function () {
    console.log("car is accelerate  ");
  },
};

console.log(a);
console.log(a.name);
console.log(a.cost);
a.start();
///////////////////
/*
objects are created inside the heap and and it contains has-part( properties(name,color ...etc)) and does-part((behaviour(function()...))
after creation of objects it is assigned by locaton in memory that is called address inside heap and that address is kept to variable inside memory creation phase
 above example has kept address "a" 

 */
