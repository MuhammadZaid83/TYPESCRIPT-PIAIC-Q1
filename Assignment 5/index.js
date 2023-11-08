"use strict";
// Assignment for the week:
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// function sumOfFirstNEvenNumbers(n: number): number {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     // Calculate the i-th even number (2 times i)
//     const evenNumber = 2 * i;
//     sum += evenNumber;
//   }
//   return sum;
// }
// const n = 5; // You can change this to the desired value of n
// const result = sumOfFirstNEvenNumbers(n);
// console.log("The sum of the first",n ,"even numbers is:", result);
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// function printEvenNumbers(numbers: number[]): void {
//     for (let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 === 0) {
//          console.log(numbers[i]);
//        }
//     }
//    }
//    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can change this to the desired array of numbers
//    printEvenNumbers(numbers);
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
// function removeEvenNumbers(numbers: number[]): number[] {
//     const oddNumbers: number[] = [];
//     for (let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 !== 0) {
//          oddNumbers.push(numbers[i]);
//        }
//     }
//     return oddNumbers;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can change this to the desired array of numbers
// const result = removeEvenNumbers(numbers);
// console.log("The array after removing even numbers is:", result);
//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// function areaOfCircle(radius:number): number {
//     let pi=3.1416;
//     let formulaofarea=pi*radius*radius;
//     return formulaofarea;
// }
// let radius=5.6;
// let result=areaOfCircle(radius);
// console.log("Area of cirlce is",result);
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// function removeFailingGrades(grades: number[]): number[] {
//     const passingGrades: number[] = [];
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= 50) {
//             passingGrades.push(grades[i]);
//         }
//     }
//     return passingGrades;
// }
// const grades = [85, 90, 45, 70, 55, 80, 60, 35, 75, 50]; // You can change this to the desired array of grades
// const result = removeFailingGrades(grades);
// console.log("The array after removing failing grades is:", result);
//  - Write a program that uses a function to find the largest element in an array of numbers
function findLargestElement(numbers) {
    let largestElement = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }
    return largestElement;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can change this to the desired array of numbers
const result = findLargestElement(numbers);
console.log("The largest element in the array is:", result);
