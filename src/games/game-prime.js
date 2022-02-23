import {
  greeting, engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const brainPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const enginePrime = (n) => {
    let answer = 'yes';
    const randomNum = randomNumb(2, 100);
    const query = gameQuestion(randomNum);
    for (let j = 2; j < randomNum; j += 1) {
      if (randomNum % j === 0 && randomNum !== 0) {
        answer = 'no';
      }
    }
    return engineGame(query, answer, userName, enginePrime, n);
  };
  return enginePrime(1);
};

export default brainPrime;
