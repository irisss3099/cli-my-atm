#! /usr/bin/env node
import inquirer from "inquirer";
//balance and pin
let myBalance = 20000; //dollar
let pin = 4400;
//bank name
console.log(`\n\t SK BANK \t\n `);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//4400===4400
if (pinAnswer.pin === pin) {
    console.log(`\n\tWELCOME\t\n`);
    let transaction = await inquirer.prompt([
        {
            name: "transfer",
            message: "please select a transaction process",
            type: "list",
            choices: ["fast cash", "check balance", "withdraw", "exit"]
        }
    ]);
    if (transaction.transfer === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (transaction.transfer === "fast cash") {
        let cash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select an amount which you withdraw",
                type: "list",
                choices: ["5000", "10000", "15000", "20000"]
            }
        ]);
        if (cash.fastCash === 5000 || 10000 || 15000 || 20000)
            console.log(`your remaining amount is: ${myBalance - cash.fastCash}`);
    }
    else if (transaction.transfer === "withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "how many amount you want to withdraw?",
                type: "number",
            }
        ]);
        if (withdraw.amount < myBalance) {
            console.log(`you have successfully withdraw ${withdraw.amount} \nyour current balance is ${myBalance - withdraw.amount}`);
        }
        else {
            console.log("your amount iss insufficient");
        }
    }
    else if (transaction.transfer === "exit") {
        console.log(`\n\t THANKYOU FOR COMING \t\n`);
    }
}
else {
    console.log("please enter valid pin!!!");
}
