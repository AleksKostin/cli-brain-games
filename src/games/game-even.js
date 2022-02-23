import {
  greeting, engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const engineEven = (n) => {
    const randomNum = randomNumb(100);
    const query = gameQuestion(randomNum);
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    return engineGame(query, answer, userName, engineEven, n);
  };
  return engineEven(1);
};

export default brainEven;
