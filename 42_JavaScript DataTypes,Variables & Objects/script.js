console.log("DataTypes in javascript");
let myname="ayesha";
let mynumber=12;
let istrue=true;
let isnull=null;
let isundefined=undefined;
console.log(myname,mynumber,istrue,isnull,isundefined);
console.log(typeof myname,typeof mynumber,typeof istrue,typeof isnull,typeof isundefined);

//an object in javascript can be created as
let o={
    item:"coldrink",
    price:"55",
}
console.log(o);


//Rules for choosing var names 
var r;
var $r;
var _r;
//var 1r; //not allowed
var r1; 


//var can be updated and also redeclared within its scope
var a=52;
console.log(a);
var a=25;
console.log(a);

//let can be updated but not redeclared
let b=23;
console.log(b);
// let b=34;
// console.log(b);
b=34;
console.log(b);//let can be updated

//const can never be updated nor be redeclared
const d=5;
console.log(d);
// const d=7;
// console.log(d);
// d=3;
// console.log(d);

//var is globally scoped while let and const are block scope
console.log("var is globally scope");
var e=10;
console.log(e);
{
var  e=11;
console.log(e);

}
console.log(e);


console.log("let is globally scope");
let f=12;
console.log(f);
{
let f=13;
console.log(f);

}
console.log(f);

console.log("const is globally scope");
const g=14;
console.log(g);
{
const g=15;
console.log(g);

}
console.log(g);



// How Hoisting Works with var,let and const in JavaScript

console.log(number)
// undefined

var number = 10
console.log(number)//10


console.log(number1)
// cannot access number before initializer

let number1 = 10
console.log(number1)//10

console.log("let is initialize  with undefine");

console.log("const is initialize with undefine");

console.log(number2)
// cannot access number before initializer

const number2 = 10
console.log(number2)//10

console.log("let is initialize  with undefine");

console.log("const is initialize with undefine");


