/*Arrays in JS Arrays are mutable means changeable*/
// let arr=[1,2,3,4,5,7];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(2));

// arr[0]=566;  //reassign value in arrays index of zero
// console.log(arr,typeof arr);


//methods of arrays
// console.log(arr.toString());
// console.log(arr.join(' and '));
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push(99));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(100));
// console.log(arr);
// delete arr[0];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);


// let a1=[1,2,3];
// let a2=[4,5,6];
// let a3=[9,8,7];
// let result=a1.concat(a2,a3); 
// console.log(result);
// console.log((a1));
// console.log((a2));
// console.log((a3));



// let array=[7,8,3,9,2];
// console.log(array.sort()); //this method modify original array


// let array=[1,2,3,4,5,6]
// console.log(array.splice(1,2));
// console.log(array);

// console.log(array.splice(1,2,222,444));
// console.log(array);

// console.log(array.slice(1,3));
// console.log(array.slice(1));
// console.log(array);

// array.reverse();
// console.log(array);



//Loops in Array

// let array=[1,2,3,4,5,6];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// array.forEach((value,index,array) => {
//     console.log(value,index,array);
    
// });

// array.forEach(element => {
//     console.log(element);
    
// });

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
        
//     }
// }


// for (const element of array) {
//     console.log(element)
// }

// let arr=[1,3,5,7,11,13];
// let newArr=arr.map((e)=>{
//     return e**2;
// })
// console.log(newArr);

// const greaterThanSeven=(e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(newArr.filter(greaterThanSeven))


let arr2=[1,2,3,4,5,6]
const red= (a,b)=>{
return a+b;
}
console.log(arr2.reduce(red));

