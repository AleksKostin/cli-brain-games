import {
  engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const engineEven = () => {
  const randomNum = randomNumb(100);
  const query = gameQuestion(randomNum);
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [query, answer];
};

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  return engineGame(engineEven, task);
};

export default brainEven;
