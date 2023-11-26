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
        const nonNullUserInput = userInput == null ? '' : userInput;
        this.checkAndPrintResult(nonNullUserInput);
    }

    startTimer(seconds: number) {
        console.log('started');
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
}
