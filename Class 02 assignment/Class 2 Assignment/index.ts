// Exercise 1:  Write a program that calculates the area of a rectangle.
var length:number =18;
var width:number = 24;
let areaofrectangle=(length*width);
console.log(areaofrectangle,"meter");
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
var length:number=14;
var width:number=18;
var hieght:number=11;
let volumeofCube=(length*width*hieght);
console.log(volumeofCube,"meter Cube");
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
var num1= -10;
var num2=  5;
var num3=  0;
if(num1<1){
    console.log("num1 is negative");
}
if(num2<1){
    console.log("num2 is negative");
}
else{
    console.log("num2 is positive");
}
if(num3=0){
    console.log("num3 is zero")
}
//Exercise 4:   Write a program that checks if a given number is even or odd.
function isEvenorOdd(number:number) {
    if(number % 2 == 0){
        return"even";
    }
    else{
        return"odd";
    }
}

let numberTocheck =18;
let result= isEvenorOdd(numberTocheck);
console.log(numberTocheck,result)
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
function checkEligiblitytovote(age:number):string {
    if(age>18){
        return "eligibletovote"
    }
    else{
        return "noteligibletovote"
    }
    
}
 let age=18; // Enter your age to check Eligibilty Status.
 let eligibiltyStatus=checkEligiblitytovote(age);
 console.log(eligibiltyStatus);
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let resultofExpression:number=((10 + 5) * 3 - 2) / (4 % 3)  - 7;
console.log(resultofExpression);

