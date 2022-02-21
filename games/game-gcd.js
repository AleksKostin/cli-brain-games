import {
  greeting, wrongAnswer, gameQuestion, randomMinToMax,
} from '../src/index.js';

const brainGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  let answer;
  let num1;
  let num2;
  while (i < 3) {
    const numbers = `${num1 = randomMinToMax(2, 101)} ${num2 = randomMinToMax(2, 101)}`;
    const query = gameQuestion(numbers);
    const tmp = num1 <= num2 ? num2 : num1;
    for (let j = 1; j <= tmp; j += 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        answer = j;
      }
    }
    if (query === String(answer)) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGcd;
