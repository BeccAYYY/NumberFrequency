import { ClientService } from './services/ClientService';
import { EventEmitter } from 'events';

const prompt = require('prompt-sync')();
const eventEmitter = new EventEmitter();

const clientService = new ClientService(eventEmitter);
var timerDuration = prompt("Please input the amount of time in seconds between emitting numbers and their frequency: ");
handleTimerDurationInput();


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (input: any) => clientService.handleInput(input))

eventEmitter.on('output', (data: any) => {
  console.log(data);
});

function isPositiveNumber(input: string): boolean {
  const numberValue = Number(input);
  
  return !isNaN(numberValue) && numberValue > 0;
}

function handleTimerDurationInput() {
  if (isPositiveNumber(timerDuration)) {
    clientService.startTimer(timerDuration);
    return;
  }
  timerDuration = prompt("Invalid input. Please enter a positive number: ");
  handleTimerDurationInput();
}