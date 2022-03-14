import run from '../index.js';

import getRandomNumb from '../utils.js';

const engineEven = () => {
  const randomNum = getRandomNumb(100);
  const query = `${randomNum}`;
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [query, answer];
};

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  return run(engineEven, task);
};

export default brainEven;
