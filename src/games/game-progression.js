import {
  gameQuestion, engineGame,
} from '../index.js';

import randomNumb from '../utils.js';

const engineProgression = () => {
  const array = [];
  const firstElement = randomNumb(1, 20);
  const randomStep = randomNumb(2, 20);
  for (let j = firstElement; array.length < 10; j += randomStep) {
    array.push(j);
  }
  const randomElementOfArr = randomNumb(array.length);
  const answer = array[randomElementOfArr];
  array.splice(randomElementOfArr, 1, '..');
  const str = array.join(' ');
  const query = gameQuestion(str);
  return [query, answer];
};

const brainProgression = () => {
  const task = 'What number is missing in the progression?';
  return engineGame(engineProgression, task);
};

export default brainProgression;
