/*
create a faulty calculator using javascript
 this faulty calculator does following
 1) It takes two numbers as input from the user
 2)It performs wrong operations as follows

+  ===> -
*  ===> +
-  ===> /
/  ===> **


it performs wrong operations 10% of the time

 */

let random=Math.random();
console.log(random);
let a=prompt("Enter first number");
let b=prompt("Enter second number");
let c=prompt("Enter operation");

let obj={
    "+":"-",
    "*":"/",
    "/":"**"
}

if(random>0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
}
else{
    //perform wrong calculation
    c=obj[c];
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
    
}