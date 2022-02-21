import {
  greeting, wrongAnswer, gameQuestion, randomMinToMax,
} from '../src/index.js';

const brainPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    let answer = 'yes';
    const randomNum = randomMinToMax(2, 100);
    const query = gameQuestion(randomNum);
    for (let j = 2; j < randomNum; j += 1) {
      if (randomNum % j === 0 && randomNum !== 0) {
        answer = 'no';
      }
    }
    if (query === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainPrime;
