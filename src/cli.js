import readlineSync from 'readline-sync';

const requestName = (quest) => {
  const userName = readlineSync.question(`${String(quest)} `);
  console.log(`Hello, ${userName}!`);
};
export default requestName;
