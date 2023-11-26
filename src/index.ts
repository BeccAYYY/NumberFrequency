import { FibonacciChecker } from './services/FibonacciChecker';
import { NumberRecorderClass } from './services/NumberRecorderClass';
import { Timer } from './services/Timer';
import { DescendingOutputFormatter } from './services/DescendingOutputFormatter';


const prompt = require('prompt-sync')();

const fibonacciChecker = new FibonacciChecker();
const numberRecorder = new NumberRecorderClass(fibonacciChecker)
const timerDuration = prompt("Please input the amount of time in seconds between emitting numbers and their frequency: ");

const outputFormatter = new DescendingOutputFormatter();

const timer = new Timer(timerDuration, () => {
  console.log(outputFormatter.format(numberRecorder.recordedNumbers));
})

timer.start();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (input: any) => onInput(input))

function onInput(userInput : any) {
  const nonNullUserInput = userInput == null ? '' : userInput;
  checkAndPrintResult(nonNullUserInput);
}

function checkAndPrintResult(input: string): void {
  const bigIntput = BigInt(input);

  if (numberRecorder.checkAndRecordNumber(bigIntput)) {
    console.log("FIB!");
  }
};
