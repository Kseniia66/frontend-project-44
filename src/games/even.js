import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAndAnswer = () => {
  const num = randomNumber(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, answer];
};
const evenGame = () => ruleGames(rule, questionAndAnswer);

export default evenGame;
