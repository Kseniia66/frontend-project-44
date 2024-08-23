import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    } divider += 1;
  }
  return true;
};
const questionAndAnswer = () => {
  const num = randomNumber(1, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
const primeGame = () => ruleGames(rule, questionAndAnswer);

export default primeGame;
