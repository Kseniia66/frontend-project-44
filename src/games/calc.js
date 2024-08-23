import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const operation = ['+', '-', '*'];

const rule = 'What is the result of the expression?';

const calc = (num, operator, num1) => {
  switch (operator) {
    case '+':
      return num + num1;
    case '-':
      return num - num1;
    case '*':
      return num * num1;
    default:
      return null;
  }
};
const questionAndAnswer = () => {
  const num = randomNumber(1, 10);
  const num1 = randomNumber(1, 10);
  const randomIndex = operation[randomNumber(0, operation.length - 1)];
  const question = `${num} ${randomIndex} ${num1}`;
  const answer = `${calc(num, randomIndex, num1)}`;

  return [question, answer];
};

const calcGame = () => ruleGames(rule, questionAndAnswer);

export default calcGame;
