//********Operators In JavaScript*****************

// 1----------- Arithmetic operators---------------

let a=90+3;
let b=90-5;
let c=8*7;
let d=20/2;
let e=55/2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 2----------- Assignment operators---------------

a=77;
console.log(a);
a += 3;
console.log(a);
a -= 3;
console.log(a);
a *= 3;
console.log(a);
a /= 3;
console.log(a);
a %= 3;
console.log(a);
a **= 3;
console.log(a);


// 3----------- Comparison operators---------------
let age=18;
if(age==18){    //equal to 
console.log("you can vote");
}

age=23;
if(age!=18){  //not equal to
    console.log("you cannot vote")
}

let x=20;
let y="20";
if(x==y){  //check only value
console.log("yes x is equal to y");
}

let m=20;
let n="20";
if(m===n){ //equal value and type
console.log("yes m is equal to n");
}
else{
    console.log("m not equal to n because both have different data types");
}


let r=20;
let s="20";
if(r!=s){ //not equal value 
console.log("yes r is not equal to s");
}
else{
    console.log("both r and s have same value 20");
}


let u=20;
let v="20";
if(r!==s){ //not equal value not equal type
console.log("yes r is not equal to s");
}

if(age>18){  //greater than
    console.log("you are above 18");
}

age=6;
if(age<18){  //less than
    console.log("you are less than 18");
}

age=45;
if(age>=18){ //greater than or equal to
    console.log("you are above 18");
}



age=16;
if(age<=18){ //greater than or equal to
    console.log("you are less than 18");
}


// 3----------- Logical operators---------------
if(age>18 && age==18){  //logical AND
    console.log("you are above 18");
}

if(age<18 || age==18){  //logical OR
    console.log("you are 18 or turning to 18");
}

if(age!=17){      //logical not
    console.log("you are not 17");
}



/****************************conditional statements*************************** */
//if else if  else ladder
let myage=24;
if(myage>10){
    console.log("you are a valid age");
}
else if(myage>10 && myage<15){
    console.log("you are a teenager");
}
else if(myage>18){
    console.log("you are 18 years old");
}
else{
    console.log("invalid age");
}



/****************************JavaScript ternary operator*************************** */
const Myage = 26;
const beverage = Myage >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"


const marks=87;
const  grade = marks >= 80 ? "A" : "pass";
console.log(grade); // "A"