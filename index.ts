#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1234;
console.log("Welcome! Dear Consumer");
let pinAns = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your Pin Code",
  },
]);
if (myPin === pinAns.pin) {
  console.log("Correct your Pin Number!");
  let operation = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "Select your option please:",
      choices: ["check balance", "fastcash", "deposit", "withdraw"],
    },
  ]);
  if (operation.options === "check balance") {
    console.log(myBalance);
  } else if (operation.options === "fastcash") {
    let amountFastCash = await inquirer.prompt([
      {
        name: "fastcash",
        type: "list",
        message: "Select your Amount to withdraw please:",
        choices: [500, 1000, 5000, 1000],
      },
    ]);
    console.log(
      `your remaining balance is Rs.${myBalance - amountFastCash.fastcash}`
    );
  } else if (operation.options === "deposit") {
    let amountDeposit = await inquirer.prompt([
      {
        name: "deposit",
        type: "number",
        message: "Select your Amount to withdraw please:",
      },
    ]);
    console.log(
      `your deposited ${amountDeposit.deposit} amount of Rs.${myBalance}`
    );
    console.log(
      `Now your total Amount is ${myBalance + amountDeposit.deposit}`
    );
  } else if (operation.options === "withdraw") {
    let amountWithdraw = await inquirer.prompt([
      {
        name: "withdraw",
        type: "number",
        message: "Enter your Amount to withdraw please:",
      },
    ]);
    if (amountWithdraw.withdraw <= myBalance) {
      console.log(`you withdraw Rs.${amountWithdraw.withdraw}`);
      console.log(
        `your remaining balance is ${myBalance - amountWithdraw.withdraw} Rs.`
      );
    } else {
      console.log("Sorry! you have insufficient balance.");
    }
  }
} else {
  console.log("Incorrect Pin Code!");
}
