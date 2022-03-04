import {
  engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const engineCalc = () => {
  const operator = ['+', '-', '*'];
  let answer;
  let num1;
  let num2;
  const randomOperator = operator[randomNumb(operator.length)];
  const expression = `${num1 = randomNumb(10)} ${randomOperator} ${num2 = randomNumb(10)}`;
  const query = gameQuestion(expression);
  switch (randomOperator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    default:
      answer = num1 * num2;
      break;
  }
  return [query, answer];
};

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  return engineGame(engineCalc, task);
};

export default brainCalc;
