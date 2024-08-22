import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};
const questionAndAnswer = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const gcdGame = () => ruleGames(rule, questionAndAnswer);
export default gcdGame;
