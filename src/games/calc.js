import ruleGames from '../index.js';


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operation = ['+', '-', '*'];


const rule = 'What is the result of the expression?';
const questionAndAnswer = () => {
    const num = randomNumber(1, 10);
    const num1 = randomNumber(1, 10);
    const randomIndex = operation[Math.floor(Math.random() * (operation.length - 0))];
    const question = `${num} ${randomIndex} ${num1}`;
    let answer = 0;
    switch (randomIndex) {
        case '+':
            answer = num + num1;
            break;
        case '-':
            answer = num - num1;
            break;
        case '*':
            answer = num * num1;
            break;
        default:
              result = null;
    }
    return [question, answer];
};

const calcGame = () => ruleGames(rule, questionAndAnswer);

export default calcGame;