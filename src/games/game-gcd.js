import {
  engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const engineGcd = () => {
  let answer;
  let num1;
  let num2;
  const numbers = `${num1 = randomNumb(2, 101)} ${num2 = randomNumb(2, 101)}`;
  const query = gameQuestion(numbers);
  const tmp = num1 <= num2 ? num2 : num1;
  for (let j = 1; j <= tmp; j += 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      answer = j;
    }
  }
  return [query, answer];
};

const brainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  return engineGame(engineGcd, task);
};

export default brainGcd;
