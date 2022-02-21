import {
  greeting, wrongAnswer, gameQuestion, randomMinToMax, randomElement,
} from '../src/index.js';

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const array = [];
    const firstElement = randomMinToMax(1, 20);
    const randomStep = randomMinToMax(2, 20);
    for (let j = firstElement; array.length <= 10; j += randomStep) {
      array.push(j);
    }
    const randomElementOfArr = randomElement(array.length);
    const answer = array[randomElementOfArr];
    array.splice(randomElementOfArr, 1, '..');
    const query = gameQuestion(array);
    if (query === String(answer)) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainProgression;
