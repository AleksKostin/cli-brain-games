#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let num;
  let i = 0;
  while (i < 3) {
    const query = readlineSync.question(`Question: ${num = Math.floor(Math.random() * 100)}\nYour answer: `);
    if (query === 'yes' && num % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (query === 'no' && num % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else if (query === 'yes' && num % 2 !== 0) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    } else if (query === 'no' && num % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    } else {
      return console.log('Error! incorrect input!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
