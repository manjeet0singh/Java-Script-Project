// console.log("Hello world");
// alert("me");
// document.write("This is document write")

// javascript Consol API
// console.log("Hello world", 8 + 2, "Another log");
// console.warn("ME Name is mnajee");
// console.error("This is Lulliya");



// Javascript Vribales
// multi
// line
// comment

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);



// Data Type In Javascript 
// numbers
var num1 = 455;
var num2 = 45.36;



// string
var str1 = "This s a string";
var str2 = "This is also a string";


// objects
var marks = {
    shadab: 34,
    manjeet: 56,
    vishal: 44.556

}
// console.log(marks);



// booleans
var a = true;
var b = false;
// console.log(a);
// console.log(b);
// console.log(a,b);





var und = undefined;
// console.log(und);



var n = null;
// console.log(n);

// Arrays

var arr = [1, 2, "darling", "prity", 5]
// console.log(arr);


// arthimatic opraters in javascript
// 1. Arthmetics Opraters

var a = 100;
var b = 10;
// console.log("The value of a+b", a + b);
// console.log("The value of a-b", a - b);
// console.log("The value of a*b", a * b);
// console.log("The value of a/b", a / b);




// // 2.Assiment Operaters
var c = b;
// c+=2;
// c-=2;
// // c*=4;
// // c/=2;
// console.log(c);



// Compression Operaters
var x = 34;
var y = 32;
// console.log(x == y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x>y);





// logical operaters\


// logical and
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&false)
// console.log(false&&true)



//  logical or
// console.log(true||true)
// console.log(true||false)
// console.log(false||false)
// console.log(false||true)

// logical not
//  ( Galat Ko sahi aur sahi ko galat)
// console.log(!false);
// console.log(!true);


// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14 ,16);
// console.log(c1,c2);


function avg(a, b) {
    c = (a + b) / 2;
    return c;
}


c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);


// conditional In javascript



// if- statement
var age = 34;
if (age > 8) {
    console.log('You are Not a Kid')
}


// if- else statement

var age = 11;
// if (age > 18){
//     console.log('You  can Drink  Rasana water')
// }
// else{
//     console.log('You Cannont deink rasana water');
// }

// if- else Ladder

// if(age>32){
//     console.log("You are  not a kid");
// }
// else if(age>26){
//     console.log("bacche nhi rahe");
// }
// else if(age>22){
//     console.log("yes bacche nhi rhe");
// }

// else if(age>18){
//     console.log("18 bacche nhi rahe");
// }
// else{
//     console.log("Bacche Rahe");
// }
// console.log("End of ladder");

// var arr = [1, 2, 3, 4, 5, 6, 7,];
// console.log(arr);






// for Loop:-----
// var arr = [1, 2, 3, 4, 5, 6, 7,];
// for(var i = 0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }


// foor Each Loop:===
// var arr = [1,2,3,4,5,6,7,];
// arr.forEach(function(element){
//     console.log(element)
// })



// const ac = 0;
// ac++;
// ac = ac +1
// var arr = [1,2,3,4,5,6,7,];

// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }
// var arr = [1, 2, 3,4, 5,6,7]
// let j=0;
// do {
//     console.log(arr[j]);
//     j++;

// } while (j < arr.length);
// print=1,2,3,4,5,6,7






// print=UNdefine





// Do-while-loop:=1 step chalta he chalta hai{do loop}
// while-loop:=Condition che kr ke phr chelega


let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("manjeet")
// myArr.shift()
// const newLen = myArr.unshift("Manjeet")
// console.log(newLen);
// console.log(myArr);






// String Methods i9n JavaScript
let myLovelyString = "Manjeet is a good boy ! His Heabits  good is very good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.lastIndexOf("good"))

console.log(myLovelyString.slice(1,4))
