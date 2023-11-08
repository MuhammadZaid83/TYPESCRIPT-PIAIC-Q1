"use strict";
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
function celsius(temp) {
    //var CTOF:number=10;
    //celcius to farenheit
    var result1 = temp - (15 / 11) + 8;
    console.log("celcius", result1);
}
celsius(10);
function FtoC(temp) {
    //var FTOC:number=10;
    //farenheit to celcius
    var result2 = temp + 12 - (6 / 5);
    console.log("farenheit", result2);
}
FtoC(10);
//Write a program that calculates the percentage
var sum1 = 10;
var sum2 = 20;
var percentage = (sum1 * sum2) / 100;
console.log(percentage);
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
let days = 17;
let weeks = Math.floor(days / 7);
let remainingDays = days % 7;
console.log(weeks);
//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount
var price = 100;
if (price >= 100) {
    console.log("apply a 10% discount");
}
else {
    console.log("apply a 5% discount");
}
//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 18;
if (age >= 0 && age <= 12) {
    console.log("child");
}
else if (age >= 13 && age <= 19) {
    console.log("teenager");
}
else {
    console.log("adult");
}
//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function sum() {
    var temp = 41;
    if (temp < 32) {
        console.log("cold");
    }
    else {
        console.log("warm");
    }
}
sum();
//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.*/
function num() {
    var num = 18;
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("divisible");
    }
    else {
        console.log("not divisible");
    }
}
num();
//Write a program that checks if the given year is leap year or not.
function year() {
    var year = 2023;
    if (year % 4 == 0) {
        console.log(" leap year");
    }
    else {
        console.log("not leap year");
    }
}
year();
//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var day1 = 1;
var day2 = 2;
var day3 = 3;
var day4 = 4;
var day5 = 5;
var day6 = 6;
var day7 = 7;
if (day1 == 1) {
    console.log("day1 is", "monday");
}
else if (day1 == 2) {
    console.log("day2 is", "tuesday");
}
else if (day1 == 3) {
    console.log("day3 is", "wednesday");
}
else if (day1 == 4) {
    console.log("day4 is", "thursday");
}
else if (day1 == 5) {
    console.log("day5 is", "friday");
}
else if (day1 == 6) {
    console.log("day6 is", "saturday");
}
else if (day1 == 7) {
    console.log("day7 is", "sunday");
}
else {
    console.log("no more days");
}
