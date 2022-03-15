import readlineSync from 'readline-sync';

const run = (engineGame, task) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${task}`);
  const numbOfStage = 3;
  for (let i = 0; i < numbOfStage; i += 1) {
    const [query, correctAnswer] = engineGame();
    const userResponse = readlineSync.question(`Question: ${query}\nYour answer: `);
    if (userResponse === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default run;
