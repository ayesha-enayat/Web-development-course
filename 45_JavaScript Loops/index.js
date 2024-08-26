//for loop 
for(let i=0;i<10;i++){
    console.log(i);
}
for (let index = 0; index<10; index++) {
    console.log("hello world");
    
}
//Infinite loop
// for (let index = 0; index>=0; index++) {  
//     console.log("hello world");
    
// }

//for in loop

let obj={
    mynmae:"ayesha",
    company:"ABC",
    roll:"programmer"

}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element);

}

//for of loop
//it is used for array

for (const c of "Ayesha") {
    console.log(c);
}


//while loop
i=0;
while(i<6){
console.log(i);
i++;
}
//infinite while loop
// i=0;
// while(i<6){
// console.log(i);

// }



//do while loop 
//it run atleast one time no matter the condition is true or false
i=0;
do {
    console.log("hello");
    i++; 
} while (i<6);

i=10;
do {
    console.log("hello world");
    i++; 
} while (i<6);