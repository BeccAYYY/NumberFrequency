import { ClientService } from './services/ClientService';
import { EventEmitter } from 'events';

const prompt = require('prompt-sync')();
const eventEmitter = new EventEmitter();

const clientService = new ClientService(eventEmitter);
const timerDuration = prompt("Please input the amount of time in seconds between emitting numbers and their frequency: ");
clientService.startTimer(timerDuration);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (input: any) => clientService.handleInput(input))

eventEmitter.on('output', (data: any) => {
  console.log(data);
});
