// console.log("hello")
// // variable can reinitialize and reassign
// var a;
// a=10;
// var a;
// a=20;
// // rewinitialize
// let b;
// b=10;
// // can't reinitialize and reassign
// const c=20;
// console.log(a)
// console.log(b)
// console.log(c)

// var str="CSD"
// console.log(str)

// var obj={
//     name:"sai",
//     dept:"CSD"
// }
// console.log(obj);
// console.log(typeof(obj));
// Arthimatic operater
// var a=10;
// var b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// relational operater
// var c=10
// var d="10";
// console.log(c==d);
// console.log(c===d);
// console.log(c!=d);
// console.log(c>d);
// console.log(c<d);
// logical operater
// var a=true;
// var b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!b);

// conditional statement(if,if ...else,elseif,switch)

// var a=25;
// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// // else if
// var a=80;
// if(a>90){
//     console.log("s");
// }
// else if(a>75){
//     console.log("A");
// }
// else if(a>40){
//     console.log("pass");
// }
// else{
//     console.log("Fail");
// }

// var m=76;
// const r=(m>90)? `${m} is A Grade`: (m>75) ?  `${m} is B Grade` : `${m} is Fail`;
// console.log(r);
// var day=3;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log("thus");
//         break;
//     case 5:
//         console.log("fri");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log("Sun");
//         break;
//     default:
//         console.log("invalid day");
//         break;
// }

// // while loop
// var nums=1234;
// var count=0;
// while (nums>0) {
//     nums=Math.floor(nums/2);
//     count++
// }
// console.log(count);

// arrow Function
// var add=() =>{
//     console.log("I am Arrow Function");
// }
// add();

// Arrow Function with parameters
// var add=(a,b)=>{
//     console.log(a+b);
// }
// add(10,20);

// callback function
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// var result=(res)=>{
//     console.log(res);
// }
// add(10,20,result);

// Destructuring operator
// var [m1,m2,m3,m4,m5]=[99,98,97,96,95]
// console.log(m1)
// console.log(m2)
// console.log(m3)
// console.log(m4)
// console.log(m5)

// var {name,age,dept}={
//     name:"sai",
//     age:20,
//     dept:["cs","ds"],
// }
// console.log(name);
// console.log(age);
// console.log(dept);

// for..in
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }

// for ..of
var arr=[10,20,30,40];
for(let i of arr){
     console.log(i);
}

// map
var arr=[1,2,3,4,5]
var double =arr.map((val)=>(val*2));
console.log(double);

// filter
var arr=[1,2,3,4,5]
var even =arr.filter((val)=>(val%2===0));
console.log(even);

// reduce
var arr=[1,2,3,4,5]
var total =arr.reduce((sum,val)=>(sum+val),0);
console.log(total);

