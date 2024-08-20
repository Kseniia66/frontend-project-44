import ruleGames from '../index.js';


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const rule = 'What number is missing in the progression?';
const questionAndAnswer = () => {
    const num = randomNumber(1, 50);
    const stepProgression = randomNumber(2, 10);
    
    
    const progression = () => {
        const arr = [num];
        for(let i = 0; arr.length < 10; i += 1) {
            arr.push(arr[i] + stepProgression);
        }
        return arr;
    };
    const progressArr = progression();

    const hiddenPosition = randomNumber(1, progressArr.length);
    const element = progressArr[hiddenPosition];
    progressArr[hiddenPosition] = '..';
    const question = progressArr.join(' ');

    const answer = String(element);

    return [question, answer];
};

const progressionGame = () => ruleGames(rule, questionAndAnswer);

export default progressionGame;