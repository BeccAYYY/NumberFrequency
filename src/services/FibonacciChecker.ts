export class FibonacciChecker implements NumberChecker {
    private fibonacciList: bigint[] = this.generateFibonacciList(1000);

    meetsCriteria(numberToCheck: bigint): boolean {
        return this.fibonacciList.includes(numberToCheck);
    }

    private generateFibonacciList(count: number): bigint[] {
        const fibonacciList: bigint[] = [0n, 1n];

        for (let i = 2; i < count; i++) {
            const nextFibonacci = fibonacciList[i - 1] + fibonacciList[i - 2];
            fibonacciList.push(nextFibonacci);
        }

        return fibonacciList;
    }
}
