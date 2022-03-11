import {
  run, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const calculation = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return result;
};

const engineCalc = () => {
  const operator = ['+', '-', '*'];
  const num1 = getRandomNumb(10);
  const num2 = getRandomNumb(10);
  const randomOperator = operator[getRandomNumb(operator.length)];
  const expression = `${num1} ${randomOperator} ${num2}`;
  const query = getGameQuestion(`Question: ${expression}\nYour answer: `);
  const answer = calculation(num1, num2, randomOperator);
  return [query, answer];
};

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  return run(engineCalc, task);
};

export default brainCalc;
