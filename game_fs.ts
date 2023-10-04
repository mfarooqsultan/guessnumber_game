#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition1 = true;
while (condition1){
let answer = await inquirer.prompt([
    { name:"puzzle",
      type:"list",
    message:"let guess the number",
    choices:[1,2,3,4,5,6,7,8,9,10],
    }
]) ;
async function game_puzzle(){
let result1:any = Math.random().toFixed(1);
let result2= (result1*10);
console.log(result2)
if (result2 === answer.puzzle){console.log(chalk.bgGreenBright("your guess is right"))}
else{console.log(chalk.bgRedBright("try again"))};
}
game_puzzle()
let query = await inquirer.prompt([{
  name:"doAgain",
  type:"confirm",
  message:"You want to play again?"
}
]);
condition1 = query.doAgain
};
