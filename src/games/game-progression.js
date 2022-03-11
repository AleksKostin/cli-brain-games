import {
  getGameQuestion, run,
} from '../index.js';

import getRandomNumb from '../utils.js';

const getProgression = (first, step) => {
  const result = [];
  for (let j = first; result.length < 10; j += step) {
    result.push(j);
  }
  return result;
};

const engineProgression = () => {
  const firstElement = getRandomNumb(1, 20);
  const randomStep = getRandomNumb(2, 20);
  const progression = getProgression(firstElement, randomStep);
  const randomElement = getRandomNumb(progression.length);
  const answer = progression[randomElement];
  progression.splice(randomElement, 1, '..');
  const str = progression.join(' ');
  const query = getGameQuestion(`Question: ${str}\nYour answer: `);
  return [query, answer];
};

const brainProgression = () => {
  const task = 'What number is missing in the progression?';
  return run(engineProgression, task);
};

export default brainProgression;
