//Functions are used because  they can be reused in the code

function greeting(name){
    console.log("good morning "  + name);
    console.log("welcome " + name);
}
greeting("Ayesha"); //function calling
greeting("Rohan");
greeting("Erum");


function sum(a,b){
    console.log(a+b);
}
result=sum(3,4);
// console.log(result); //undefined because we are not returning anything from the function
console.log("The sum of these numbers is " + result);


function sum1(a,b){
    return a+b
}
result=sum1(3,4);
console.log("the sum of a + b is " , result );

function sum3(a,b,c=3){ //c is default parameter
    return a+b+c;
}

console.log(sum3(3,3));
console.log(sum3(3,3,1));
console.log(sum3()); //Nan not a  number because we are not passing any argument to the function
console.log(sum3(3));//Nan  because we are not passing two arguments to the function


//Arrow function
//we can pass arrow function in turn in another function
const funct1= (x)=>{
    console.log("I am  an arrow function " + x);

}
funct1(5);
funct1(7);
funct1(9);


