"use strict";
//Qno 1
//Personal Message: Store a person’s name in a variable.
//let personname: string = "Zaid";
//console.log(personname);
//Qno 2
//print a message to that person.
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// console.log("Hello Zaid, would you like to learn some python today?");
//Qno 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase.
//  Store the person's name in a variable
//  let personName: string = "Muhammad Zaid";
// console.log(personName);
// Convert to lowercase
// let lowercaseName: string = personName.toLowerCase();
// console.log(lowercaseName);
//  Convert to uppercase
//  let uppercaseName: string = personName.toUpperCase();
//  console.log(uppercaseName);
// Convert to titlecase 
//  let titlecaseName: string = toTitleCase(personName);
// function toTitleCase(personName: string): string {
//      throw new Error("Function not implemented.");
//}
//Qno 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Define the quote and its author
// let quote: string = ("Work Work and Work until you are bound to sucess.");
// let author: string = ("Quaid-E-Azam");
// console.log(${author},"Once Said", quote);
//Qno 5
// Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
//let famous_person:string = ("Quaid-E-Azam");
//let message:string = ("Work Work and Work until you are bound to sucess.");
//console.log(message);
//Qno 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//Q no 7+8
//Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
// console.log(5 + 3);
// console.log(12 - 4);
// console.log(8 * 1);
// console.log(32 / 4);
//Qno 9
//Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
//Print that message.
// let favno = 18;
// let Message = ("My favourite number is");
// console.log(Message,favno);
//Qno 10
//Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
//Then write one sentence describing what the program does.
//1)
// console.log(5 + 3);
// // Addition
// console.log(12 - 4);
// // Subtraction
// console.log(8 * 1);
// // Multiplication
// console.log(32 / 4);
// Division
//2)
// let favno = 18;
// let Message = ("My favourite number is");
// console.log(Message,favno);
// This program displays my favourite number
//Qno 11
//Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
//let names:string[] =  ["Ali","Hamza","Hammad","Husnanin","Zeeshan","Umer","Abdul Muqeet" ]
//for (let i = 0; i < names.length; i++) {
//console.log(names[i]);
// }
//Qno 12 
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.
// let names:string[] =  ["Ali","Hamza","Hammad","Husnanin","Zeeshan","Umer","Abdul Muqeet" ]
// for (let i = 0; i < names.length; i++) {
// console.log(names[i],"Have a great day");
// }
// Qno 13
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several
//examples. Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”
// let modeoftranspotation:string[] =  ["Bike","Car","Private jet","sports car","Bicycle" ]
//  for (let i = 0; i < modeoftranspotation.length; i++) {
//  console.log("I wish to have a", modeoftranspotation[i]);
//  }
//Q no 14
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at 
//least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner
// let invitedperson:string [] = ["Hamza","Ali","Husnain","saad","subhan"];
// for (let i = 0; i < invitedperson.length; i++){
//console.log(invitedperson[i] ,"you are invited");
//}
//Qno 15
//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
// let invitedperson:string [] = ["Hamza","Ali","Husnain","saad","subhan"];
//invitedperson.splice(1,1,"Hammad"); 
//for (let i = 0; i < invitedperson.length; i++){
//console.log(invitedperson[i] ,"you are invited");
//}
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
// of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
// let invitedperson:string [] = ["Hamza","Ali","Husnain","saad","subhan"];
// console.log(`${invitedperson[4]} is not availabe`);
// invitedperson.splice(invitedperson.indexOf("Hamid"),1 ,"Abdullah");
// console.log(invitedperson);
// for (let i = 0; i < invitedperson.length; i++){
// console.log(invitedperson[i] ,"you are invited");
//  }
// Qno 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people
//that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
// let invitedperson:string [] = ["Hamza","Ali","Husnain","saad","subhan"];
// invitedperson.unshift("Kamran");
// invitedperson.splice(2,1,"Hammad"); 
// invitedperson.push("Mubeen");
// for (let i = 0; i < invitedperson.length; i++){
// console.log(invitedperson[i] ,"you are invited","I have found a bigger dinning table");
// }
// Qno 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
// only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.
// let invitedperson:string [] = ["Hamza","Ali", "Husnain","saad","subhan"];
// let Note = ("you can only invite two persons for dinner");  
// for(var i=invitedperson.length-1; i>=0;i--){
//   if(i>1){
//     console.log("We are sorry ", invitedperson.pop());
//   }
//   else{
//     console.log("you are still invired", invitedperson.pop()); 
//   }
// }
// console.log(invitedperson);
//  for (let i = 0; i < invitedperson.length; i++){
//  console.log(invitedperson[i],"You are still invited");
//  console.log(Note);
//  }
// 
//Q no 19
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
//cities, languages, or anything else you’d like.Write a program that creates a list containing these items.
let mountainNames = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
let riverNames = ["Nile", "Amazon", "Yangtze", "Mississippi", "Ganges"];
let countryNames = ["Egypt", "Brazil", "Pakistan", "United States", "India"];
let cityNames = ["Cairo", "Sao Paulo", "Islamabad", "New York", "Delhi"];
let languageNames = ["Arabic", "Portuguese", "English", "Spanish", "Hindi"];
console.log("Mountain Names:", mountainNames);
console.log("River Names:", riverNames);
console.log("Country Names:", countryNames);
console.log("City Names:", cityNames);
console.log("Language Names:", languageNames);
