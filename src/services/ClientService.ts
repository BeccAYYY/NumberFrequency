import { FibonacciChecker } from './FibonacciChecker';
import { NumberRecorderClass } from './NumberRecorderClass';
import { Timer } from './Timer';
import { DescendingOutputFormatter } from './DescendingOutputFormatter';
import { EventEmitter } from 'events';

export class ClientService {
    fibonacciChecker = new FibonacciChecker()
    numberRecorder = new NumberRecorderClass(this.fibonacciChecker)
    outputFormatter = new DescendingOutputFormatter();
    timer: Timer = null!;
    eventEmitter: EventEmitter;

    constructor(eventEmitter: EventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    handleInput(userInput: any) {
        const trimmedInput = userInput.trim()
        if (trimmedInput.length === 0) {
            this.eventEmitter.emit('output', 'Your input was empty.');
            return;
        }
        switch (trimmedInput) {
            case 'halt':
                this.timer.pause()
                return;
            case 'resume':
                this.timer.resume();
                return;
            case 'quit':
                console.log('quit');
                return;
        }
        if (!this.isValidBigInt(trimmedInput)) {
            this.eventEmitter.emit('output', 'Invalid input. Please enter a number.')
            return;
        }
        this.checkAndPrintResult(trimmedInput);
    }

    startTimer(seconds: number) {
        this.timer = new Timer(seconds, this.eventEmitter, () => {
            this.eventEmitter.emit('output', this.outputFormatter.format(this.numberRecorder.recordedNumbers));
        })
        this.timer.start();
    }

    private checkAndPrintResult(input: string): void {
        const bigIntput = BigInt(input);
        if (this.numberRecorder.checkAndRecordNumber(bigIntput)) {
            this.eventEmitter.emit('output', 'FIB!');
        }
    };

    private isValidBigInt(input: string): boolean {
        const isNumeric = /^\d+$/.test(input);
      
        if (isNumeric) {
          try {
            const valueAsBigInt = BigInt(input);
            return true;
          } catch (error) {
            return false;
          }
        }
        return false;
      }
}
