//Creates a Set of the first 1000 fibonacci numbers for comparison.
//Found this faster than mathematical approaches or reading from a text-file list.
export class FibonacciChecker implements NumberChecker {
    private fibonacciSet: Set<bigint> = this.generateFibonacciSet(1000);

    meetsCriteria(numberToCheck: bigint): boolean {
        return this.fibonacciSet.has(numberToCheck);
    }

    private generateFibonacciSet(count: number): Set<bigint> {
        const fibonacciList: bigint[] = [0n, 1n];

        for (let i = 2; i < count; i++) {
            const nextFibonacci = fibonacciList[i - 1] + fibonacciList[i - 2];
            fibonacciList.push(nextFibonacci);
        }

        const fibonacciSet: Set<bigint> = new Set(fibonacciList)
        return fibonacciSet;
    }
} 