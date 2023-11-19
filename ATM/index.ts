import inquirer from "inquirer";
import chalk from "chalk";

const account=[
  {
      accountNumber:"Zaid123",
      pin:"1122",
      balance:"20000",
      Transaction:[]
  },
  {
    accountNumber:"Hamza123",
    pin:"2121",
    balance:"70000",
    Transaction:[]
  },
{
    accountNumber:"Ali123",
    pin:"2211",
    balance:"70000",
    Transaction:[]
},]

  let currentUser:any =null;

async function display() {

    const choices=[
        "Login",
        "Exit",
    ];
    while (true) {
        const  {option} = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Welcome to the ATM. Please choose an option:",
        choices: choices,
    })
   
    if (option ==="Login") {
          await Login();
    }
     else if (option ==="Exit") {
         console.log("Thank you for using the ATM. Hope you will come again!");
         process.exit(0);
    }}}
    async function Login() {
      const credentials = await inquirer.prompt([
        {
          type: "input",
          name: "accountNumber",
          message: "Enter your account number:",
        },
        {
          type: "password",
          name: "pin",
          message: "Enter your PIN:",
        },]);
    
        currentUser = account.find(
          (account) =>
            account.accountNumber === credentials.accountNumber &&
            account.pin === credentials.pin
        );
      
        if (currentUser) {
          console.log("Login successful!");
          await performTransactions();
        } else {
          console.log("Invalid account number or PIN. Please try again.");
        }
      }
    
      async function performTransactions() {
        const transactionChoices = [
          "Check Account Balance",
          "Withdraw Money",
          "Check Transaction History",
          "End Transactions",
        ];
      
        while (true) {
          const { transaction } = await inquirer.prompt({
            type: "list",
            name: "transaction",
            message: "Choose a transaction:",
            choices: transactionChoices,
          });
      
          switch (transaction) {
            case "Check Account Balance":
              console.log(`Your account balance: $${currentUser.balance}`);
              break;
      
            case "Withdraw Money":
              const { amount } = await inquirer.prompt({
                type: "input",
                name: "amount",
                message: "Enter the amount to withdraw:",
                validate: (input) =>
                  input > 0 && input <= currentUser.balance
                    ? true
                    : "Invalid amount or insufficient balance.",
              });
      
              currentUser.balance -= Number(amount);
              currentUser.transactions.push(`Withdrawn: $${amount}`);
              console.log(`You have withdrawn $${amount}.`);
              break;
      
            case "Check Transaction History":
              console.log("Transaction history:");
              currentUser.transactions.forEach((transaction: string) =>
                console.log(transaction)
              );
              break;
      
            case "End Transactions":
              currentUser = null;
              console.log("Logged out.");
              return;
      
            default:
              break;
          }
        }
      }
// Start the ATM program.

display()
