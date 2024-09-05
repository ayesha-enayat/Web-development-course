console.log("This is string tutorial");
let a="Harry";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]); 
console.log(a[5]);//undefined
console.log(a.length);

let name="Harry";
let friend="rohan";
console.log(`His name is ${name} and his friend name is ${friend}`); //template literal

let b="ayesha";
console.log(b.toLocaleUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,5));
console.log(b.slice(1));
console.log(b.replace("ay","11"));
console.log(b.concat("Enayat"));

console.log(b);

let p=" ayesha    is a       good girl ";
console.log(p.split(" "));

let newP=p.trim();
console.log(newP);
