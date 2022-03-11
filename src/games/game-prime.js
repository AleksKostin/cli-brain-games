import {
  run, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isNumbPrime = (num) => {
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0 && num !== 0) {
      return false;
    }
  }
  return true;
};

const enginePrime = () => {
  const randomNum = getRandomNumb(2, 100);
  const query = getGameQuestion(`Question: ${randomNum}\nYour answer: `);
  const answer = isNumbPrime(randomNum) ? 'yes' : 'no';
  return [query, answer];
};

const brainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return run(enginePrime, task);
};

export default brainPrime;
