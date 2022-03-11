import {
  run, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const getGcd = (num1, num2) => {
  let result;
  const tmp = num1 <= num2 ? num2 : num1;
  for (let i = 1; i <= tmp; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const engineGcd = () => {
  const num1 = getRandomNumb(2, 101);
  const num2 = getRandomNumb(2, 101);
  const numbers = `${num1} ${num2}`;
  const query = getGameQuestion(`Question: ${numbers}\nYour answer: `);
  const answer = getGcd(num1, num2);
  return [query, answer];
};

const brainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  return run(engineGcd, task);
};

export default brainGcd;
