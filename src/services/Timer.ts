import { EventEmitter } from 'events';

export class Timer {
    private duration: number;
    private timerId: NodeJS.Timeout | null = null;
    private callback: Function;
    private remainingTime: number = 0;
    private startTime: number = 0;
    private eventEmitter: EventEmitter;

    constructor(seconds: number, eventEmitter: EventEmitter, callback: Function) {
        this.duration = seconds * 1000;
        this.eventEmitter = eventEmitter;
        this.callback = callback;
    }

    start() {
        if (this.startTime !== 0) {
            throw new Error("Timer is already running.");
        }
        this.startTimer();
    }
    private startTimer() {
        this.remainingTime = this.duration;
        this.timerId = setInterval(() => {
            this.callback();
            this.startTime = Date.now();
        }, this.duration)
    }

    pause() {
        if (this.timerId !== null) {
            this.remainingTime = this.remainingTime - (Date.now() - this.startTime);
            clearTimeout(this.timerId)
            this.timerId = null;
        } else {
            this.eventEmitter.emit('output', "Timer is already paused. Type \"resume\" to recommence.");
        }
    }

    resume() {
        if (this.timerId == null) {
            this.startTime = Date.now();
            this.timerId = setTimeout(() => {
                this.callback();
                this.startTimer();
            }, this.remainingTime)
        } else {
            this.eventEmitter.emit('output', "Timer is already running. Type \"halt\" to pause.");
        }

    }

}



