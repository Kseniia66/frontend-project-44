import ruleGames from '../index.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rule = 'Find the greatest common divisor of given numbers.';
const questionAndAnswer = () => {
  const getGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return getGcd(num2, num1 % num2);
  };
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const gcdGame = () => ruleGames(rule, questionAndAnswer);
export default gcdGame;
