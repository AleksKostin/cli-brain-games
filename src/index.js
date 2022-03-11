import readlineSync from 'readline-sync';

const getGameQuestion = (value) => {
  const query = readlineSync.question(value);
  return query;
};

const run = (engineGame, task) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${task}`);
  const numbOfStage = 3;
  for (let i = 0; i < numbOfStage; i += 1) {
    const [query, answer] = engineGame();
    if (query === String(answer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${query}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  getGameQuestion, run,
};
