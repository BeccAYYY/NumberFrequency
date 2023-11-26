class Timer {
    private duration: number;
    private timerId: NodeJS.Timeout | null = null;
    private callback: Function;
    private remainingTime: number = 0;
    private startTime: number = 0;

    constructor(seconds: number, callback: Function) {
        this.duration = seconds * 1000;
        this.callback = callback;
    }

    start() {
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
        } else {
            //TODO: Move this out of the timer class
            console.log("Timer is already paused. type \"resume\" to recommence.");
        }
    }

    resume() {
        if (this.timerId == null) {
            this.startTime = Date.now();
            this.timerId = setTimeout(() => {
                this.callback();
                this.start();
            }, this.remainingTime)
        } else {
            //TODO: Move this out of the timer class
            console.log("Timer is already running. type \"halt\" to pause.");
        }

    }

}



