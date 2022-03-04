import {
  engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const enginePrime = () => {
  let answer = 'yes';
  const randomNum = randomNumb(2, 100);
  const query = gameQuestion(randomNum);
  for (let j = 2; j < randomNum; j += 1) {
    if (randomNum % j === 0 && randomNum !== 0) {
      answer = 'no';
    }
  }
  return [query, answer];
};

const brainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return engineGame(enginePrime, task);
};

export default brainPrime;
