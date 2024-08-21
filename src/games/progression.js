import ruleGames from '../index.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rule = 'What number is missing in the progression?';
const questionAndAnswer = () => {
  const progressionLength = 10;

  const progression = (start, step) => {
    const arr = [];
    for (let i = 0; i < progressionLength; i += 1) {
      const value = start + step * i;
      arr.push(value);
    }
    return arr;
  };
  const start = randomNumber(1, 100);
  const step = randomNumber(2, 10);
  const getProgression = progression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = progressionLength - 1;
  const indexOfHiddenNumber = randomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);

  const answer = String(getProgression[indexOfHiddenNumber]);
  getProgression[indexOfHiddenNumber] = '..';
  const question = getProgression.join(' ');

  return [question, answer];
};

const progressionGame = () => ruleGames(rule, questionAndAnswer);

export default progressionGame;
