#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter you sentence to count: ",
        type: "string",
        name: "words",
    },
]);
let wordsCount = answer.words.trim().split(" ");
console.log(wordsCount);
console.log(`Your sentence word count is : ${wordsCount.length}`);
