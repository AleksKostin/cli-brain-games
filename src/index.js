import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const wrongAnswer = (wrong, correct, userName) => {
  const wrongCorrect = `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`;
  console.log(wrongCorrect);
};

const gameQuestion = (value) => {
  const query = readlineSync.question(`Question: ${value}\nYour answer: `);
  return query;
};

const engineGame = (query, answer, userName, functionGame, i) => {
  if (i < 3) {
    if (query === String(answer)) {
      console.log('Correct!');
      return functionGame(i + 1);
    }
    return wrongAnswer(query, answer, userName);
  } if (query !== String(answer)) {
    return wrongAnswer(query, answer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  greeting, wrongAnswer, gameQuestion, engineGame,
};
