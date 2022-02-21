import {
  randomElement, greeting, wrongAnswer, gameQuestion,
} from '../src/index.js';

const brainCalc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const operator = ['+', '-', '*'];
  let i = 0;
  let answer;
  let num1;
  let num2;
  while (i < 3) {
    const randomOperator = operator[randomElement(operator.length)];
    const expression = `${num1 = randomElement(10)} ${randomOperator} ${num2 = randomElement(10)}`;
    const query = gameQuestion(expression);
    switch (randomOperator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      default:
        answer = num1 * num2;
        break;
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

export default brainCalc;
