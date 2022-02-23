import {
  greeting, engineGame, gameQuestion,
} from '../index.js';

import randomNumb from '../utils.js';

const brainCalc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const operator = ['+', '-', '*'];
  let answer;
  let num1;
  let num2;
  const engineCalc = (n) => {
    const randomOperator = operator[randomNumb(operator.length)];
    const expression = `${num1 = randomNumb(10)} ${randomOperator} ${num2 = randomNumb(10)}`;
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
    return engineGame(query, answer, userName, engineCalc, n);
  };
  return engineCalc(1);
};

export default brainCalc;
