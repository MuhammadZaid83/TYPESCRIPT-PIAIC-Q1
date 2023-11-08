"use strict";
// //Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// var sum = 0;
// for (let i = 1; i <= 18; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);
// //Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }
// //Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("numbers");
// var i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         numbers.splice(i, 1);
//     } else {
//         i++;
//     }
// }
// console.log("numbers");
// //Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.*/
// function area(radius: number) {
//     var pii = 3.14;
//     var area = pii * radius * radius;
//     return area;
// }
// let radius = 22;
// console.log("radius:", radius);
// console.log("area of a circle:", area(radius));
// //Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.*/
// var grades = [80, 90, 40, 60, 70];
// console.log("grades");
// var i = 0;
// while (i < grades.length) {
//     if (grades[i] < 50) {
//         grades.splice(i, 1);
//     } else {
//         i++;
//     }
// }
// console.log("grades");
//Write a program that uses a function to find the largest element in an array of numbers.
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let largest = array[0];
function larges(array) {
    for (let ind = 0; ind < array.length; ind++) {
        if (array[ind] > largest) {
            largest = array[ind];
        }
    }
    return largest;
}
let largestNumber = larges(array);
console.log("the largest number is", largest);
