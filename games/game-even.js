import {
  greeting, wrongAnswer, gameQuestion, randomElement,
} from '../src/index.js';

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNum = randomElement(100);
    const query = gameQuestion(randomNum);
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    if (query === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
