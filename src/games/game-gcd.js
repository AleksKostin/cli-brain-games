import {
  greeting, engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const brainGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let answer;
  let num1;
  let num2;
  const engineGcd = (n) => {
    const numbers = `${num1 = randomNumb(2, 101)} ${num2 = randomNumb(2, 101)}`;
    const query = gameQuestion(numbers);
    const tmp = num1 <= num2 ? num2 : num1;
    for (let j = 1; j <= tmp; j += 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        answer = j;
      }
    }
    return engineGame(query, answer, userName, engineGcd, n);
  };
  return engineGcd(1);
};

export default brainGcd;
