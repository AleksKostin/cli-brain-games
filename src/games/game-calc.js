import {
  isEngineGame, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isEngineCalc = () => {
  const operator = ['+', '-', '*'];
  let answer;
  let num1;
  let num2;
  const randomOperator = operator[getRandomNumb(operator.length)];
  const expression = `${num1 = getRandomNumb(10)} ${randomOperator} ${num2 = getRandomNumb(10)}`;
  const query = getGameQuestion(expression);
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

const getBrainCalc = () => {
  const task = 'What is the result of the expression?';
  return isEngineGame(isEngineCalc, task);
};

export default getBrainCalc;
