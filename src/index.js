import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isWrongAnswer = (wrong, correct, userName) => {
  const wrongCorrect = `'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`;
  console.log(wrongCorrect);
};

const getGameQuestion = (value) => {
  const query = readlineSync.question(`Question: ${value}\nYour answer: `);
  return query;
};

const isEngineGame = (functionGame, task) => {
  const userName = getGreeting();
  console.log(task);
  const numbOfStage = 3;
  for (let i = 0; i < numbOfStage; i += 1) {
    const [query, answer] = functionGame();
    if (query === String(answer)) {
      console.log('Correct!');
    } else {
      return isWrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  getGreeting, isWrongAnswer, getGameQuestion, isEngineGame,
};
