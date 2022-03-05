import {
  isEngineGame, getGameQuestion,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isEngineEven = () => {
  const randomNum = getRandomNumb(100);
  const query = getGameQuestion(randomNum);
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [query, answer];
};

const getBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  return isEngineGame(isEngineEven, task);
};

export default getBrainEven;
