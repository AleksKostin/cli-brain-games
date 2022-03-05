import {
  isEngineGame, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isEnginePrime = () => {
  let answer = 'yes';
  const randomNum = getRandomNumb(2, 100);
  const query = getGameQuestion(randomNum);
  for (let j = 2; j < randomNum; j += 1) {
    if (randomNum % j === 0 && randomNum !== 0) {
      answer = 'no';
    }
  }
  return [query, answer];
};

const getBrainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return isEngineGame(isEnginePrime, task);
};

export default getBrainPrime;
