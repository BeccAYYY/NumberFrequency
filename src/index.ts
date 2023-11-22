import { FibonacciChecker } from './services/FibonacciChecker';
import { NumberRecorderClass } from './services/NumberRecorderClass';


const prompt = require('prompt-sync')();

const fibonacciChecker = new FibonacciChecker();
const numberRecorder = new NumberRecorderClass(fibonacciChecker)

const userInput = prompt("Enter a number: ");
const nonNullUserInput = userInput == null ? '' : userInput;

function checkAndPrintResult(input: string): void {
  const bigIntput = BigInt(input);

  if (numberRecorder.checkAndRecordNumber(bigIntput)) {
    console.log("FIB!");
  }
};

checkAndPrintResult(nonNullUserInput);
