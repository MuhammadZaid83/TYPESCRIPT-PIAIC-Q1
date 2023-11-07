import inquirer from "inquirer";
try {
    let answer = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter your first number?"
        }, {
            name: "num2",
            type: "number",
            message: "Enter your second number?"
        }, {
            name: "operations",
            type: "list",
            message: "Enter your operation?",
            choices: ["Addittion + ", "Subtraction - ", "Multiplication * ", "Division / ", "Percentage % ", "Square ** "]
        }, {
            name: "Answer",
            type: "string",
            message: "Write Answer to See result"
        }]);
    switch (answer.operations) {
        case "Addittion + ":
            console.log(answer.num1 + answer.num2);
            break;
        case "Subtraction - ":
            console.log(answer.num1 - answer.num2);
            break;
        case "Multiplication * ":
            console.log(answer.num1 * answer.num2);
            break;
        case "Division / ":
            console.log(answer.num1 / answer.num2);
            break;
        case "Percentage % ":
            console.log(answer.num1 % answer.num2);
            break;
        case "Square ** ":
            console.log(answer.num1 ** answer.num2);
            break;
    }
}
catch (error) {
    console.log("error", error);
}
;
