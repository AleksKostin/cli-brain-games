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

const engineGame = (functionGame, task) => {
  const userName = greeting();
  console.log(task);
  let i = 0;
  while (i < 3) {
    const [query, answer] = functionGame();
    if (query === String(answer)) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(query, answer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  greeting, wrongAnswer, gameQuestion, engineGame,
};
