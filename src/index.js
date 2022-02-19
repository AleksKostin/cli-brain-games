import readlineSync from 'readline-sync';

const randomElement = (element) => {
  const tmp = element;
  const random = Math.floor(Math.random() * tmp);
  return random;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const wrongAnswer = (wrong, correct, userName) => {
  const wrongCorrect = `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`;
  console.log(wrongCorrect);
};

const gameQuestion = (value) => {
  const query = readlineSync.question(`Question: ${value}\nYour answer: `);
  return query;
};

const randomMinToMax = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

export {
  randomElement, greeting, wrongAnswer, gameQuestion, randomMinToMax,
};
