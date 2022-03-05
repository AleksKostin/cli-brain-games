import {
  getGameQuestion, isEngineGame,
} from '../index.js';

import getRandomNumb from '../utils.js';

const isEngineProgression = () => {
  const array = [];
  const firstElement = getRandomNumb(1, 20);
  const randomStep = getRandomNumb(2, 20);
  for (let j = firstElement; array.length < 10; j += randomStep) {
    array.push(j);
  }
  const randomElementOfArr = getRandomNumb(array.length);
  const answer = array[randomElementOfArr];
  array.splice(randomElementOfArr, 1, '..');
  const str = array.join(' ');
  const query = getGameQuestion(str);
  return [query, answer];
};

const getBrainProgression = () => {
  const task = 'What number is missing in the progression?';
  return isEngineGame(isEngineProgression, task);
};

export default getBrainProgression;
