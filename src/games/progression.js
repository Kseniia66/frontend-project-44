import ruleGames from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step) => {
  const arr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = start + step * i;
    arr.push(value);
  }
  return arr;
};
const questionAndAnswer = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(2, 10);
  const progression = getProgression(start, step);
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = progressionLength - 1;
  const indexOfHiddenNumber = randomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const answer = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const progressionGame = () => ruleGames(rule, questionAndAnswer);

export default progressionGame;
