import readlineSync from 'readline-sync';

const roundCount = 3;

const even = (rule, questionAndAnswer) => {
console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAndAnswer = () => {
  const num = getRandomNumber(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, answer];
};
const evenGame = () => even(rule, questionAndAnswer);

export default evenGame;