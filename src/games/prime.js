import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const num = randomNumber(1, 100);
const isPrime = () => {
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return 'no';
    } divider += 1;
  }
  return 'yes';
};
const questionAndAnswer = () => {
  const question = String(num);
  const answer = isPrime(num);
  return [question, answer];
};
const primeGame = () => ruleGames(rule, questionAndAnswer);

export default primeGame;
