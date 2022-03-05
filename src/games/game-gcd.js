import {
  isEngineGame, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isEngineGcd = () => {
  let answer;
  let num1;
  let num2;
  const numbers = `${num1 = getRandomNumb(2, 101)} ${num2 = getRandomNumb(2, 101)}`;
  const query = getGameQuestion(numbers);
  const tmp = num1 <= num2 ? num2 : num1;
  for (let j = 1; j <= tmp; j += 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      answer = j;
    }
  }
  return [query, answer];
};

const getBrainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  return isEngineGame(isEngineGcd, task);
};

export default getBrainGcd;
