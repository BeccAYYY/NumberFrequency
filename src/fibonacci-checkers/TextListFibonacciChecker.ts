import * as fs from 'fs';
import path from 'path';

export class TextListFibonacciChecker {
    private fibonacciList: Set<bigint>;

    constructor() {
        const filePath = '../data/fibonacci-numbers-list.txt';
        this.fibonacciList = this.loadFibonacciList(filePath);
    }

    private loadFibonacciList(filePath: string): Set<bigint> {
        try {
            const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
            const numbers = data.split('\n').map(Number);
            return new Set(numbers.map(BigInt));
        } catch (error: any) {
            console.error('Error loading Fibonacci list from file:', error.message);
            return new Set();
        }
    }

    meetsCriteria(numberToCheck: bigint): boolean {
        return this.fibonacciList.has(numberToCheck);
    }
}
