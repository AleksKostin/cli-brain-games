import {
  greeting, gameQuestion, engineGame,
} from '../index.js';

import randomNumb from '../utils.js';

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const engineProgression = (n) => {
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
    return engineGame(query, answer, userName, engineProgression, n);
  };
  return engineProgression(1);
};

export default brainProgression;
