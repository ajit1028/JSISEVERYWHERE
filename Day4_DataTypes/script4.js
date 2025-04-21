/*
    RAM store data inside it on the temporary basis.Faster in execution.
    you have haeard of GB(10^9 bytes) that is giga bytes.
    ex: 2GB -> 2 * 10^9 bytes
        1byte -> 8 bits
        RAM is collections of bytes and byte is a collection of bits. bit is made up of  transistor(npm and npn) either 1 or 0.
        that's why RAM contains only 1 and 0. 

    Hard Disk store data permanenetly.Slower in execution.


   Datatypes: Datatype is a convertor that converts real world data(which is not in the binary ie. 12, 1.22, "Ajs", Yes,movie,song etc) into the binary
             so that it can store into the RAM.

    Everything is executing inside the RAM. either chrom or vscode or javascript etc.
    Inside RAM whenever a javascript ptogram is executing. Javascript automatically created two partition into the RAM first one is stack and second is heap.

 */

//Data types in javascript
//datatype-> Number,BigInt,String,Boolean,Null,Symbol,Undefined

let x = 23; //inside the stack create a variable x and inside x store 23 where x is name or identifier
//javascript is loosely types language you can store any data type value is not associated with data type.

// number(Integer or RealNumbers or Infinity or -Infinity or NaN)
let a = 5.9; //5,1/0 ->Infinity, -1/0->-Infinity,"hello"/2->NaN
console.log(typeof a); //number//type of above all is number

//BigInt(very large number)
let a1 = 1222n;
console.log(a1); //122n
console.log(typeof a1); //bigint //you cant use bigint on floating point(110.4n is shoing error)

// console.log(a + a1); //TypeError: Cannot mix BigInt and other types, use explicit conversions

//string (series of a character)
let b = "Ajit";
console.log(typeof b); //string

//boolean(true,false)

//undefined
let c;
console.log(typeof c + "/" + c); //undefined undefined
