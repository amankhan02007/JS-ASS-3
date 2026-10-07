 console.log("Arithmatic Operators; ")
//ADD
    function add(a,b){
    let result = a+b;
    console.log(`${a}+${b}= ${result}`);
}
    add(24,26);
//SUB;
    function sub(c,d){
    let result = c-d;
    console.log(`${c}-${d}=${result}`);
}
    sub(100,25);
//MULTLIPICATION;
    function mul(e,f){
    let result = e*f;
    console.log(`${e}*${f}=${result}`);
}
    mul(40,10);
//DIVIDE;
    function div(g,h){
    let result = g/h;
    console.log(`${g}/${h}=${result}`);
}
    div(500,5);
//MODULUS;
    function mod(m,n){
    let result = m%n;
    console.log(`${m}%${n}=${result}`);
    }
    mod(30,7);


console.log("Assignment operators; ");
//1;
let score = 20;
console.log("starting score :",score);
//2 : Add;
score += 30;
console.log("Add score += 30:",score);
//3 : sub;
score -= 40;
console.log("Sub score -= 40:",score);
//4 : mul;
score *= 15;
console.log("mul score *= 15:",score);
//5 : div;
score /= 20;
console.log("Div score /= 20: ",score);


console.log("Comparison operator:");
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

let c = 20;
let d = "20";
console.log(c != 20);
console.log(d !== 20);

let age = 19;
console.log(age>18);
console.log(age<15);

let marks = 60;
console.log(marks>=70);
console.log(marks>=35);


console.log("Total price:")
function totalprice(price,quantity){
    let result = price*quantity;
    console.log(`${price}*${quantity}=${result}`);
}
totalprice(250,4);

console.log("Final Score: ")
function Finalscore(mark1,mark2,mark3){
    let result = mark1+mark2+mark3;
    console.group(`${mark1}+${mark2}+${mark3}=${result}`);
}
Finalscore(25,75,50);

