import ruleGames from '../index.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rule = 'Find the greatest common divisor of given numbers.';
const questionAndAnswer = () => {
    const num = randomNumber(1, 100);
    const num1 = randomNumber(1, 100);
    const question = `${num} ${num1}`;
    let answer = 0;
    const max = (num < num1) ? num : num1;
    const min = (num > num1) ? num : num1;
    for (let i = min; answer = i; i -= 1) {
        if (min % i === 0 && max % i === 0) {
                answer = i;
                break;
        }
    }
    return [question, answer];
};


const gcdGame = () => ruleGames(rule, questionAndAnswer);
export default gcdGame;