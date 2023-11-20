export class RecursiveFibonacciChecker implements NumberChecker {
    meetsCriteria(numberToCheck: bigint): boolean {
        return this.isFibonacci(numberToCheck);
    }

    private isFibonacci(numberToCheck: bigint, a: bigint = BigInt(0), b: bigint = BigInt(1)): boolean {
        if (numberToCheck === a || numberToCheck === b) {
            return true;
        }

        const next = a + b;

        if (next > numberToCheck) {
            return false;
        }

        return this.isFibonacci(numberToCheck, b, next);
    }
}
