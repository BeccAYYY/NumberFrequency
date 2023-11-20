export class QuadraticFibonacciChecker implements NumberChecker {
    meetsCriteria(numberToCheck: bigint): boolean {
        // Check if 5n^2 + 4 or 5n^2 - 4 is a perfect square
        return this.isPerfectSquare(5n * numberToCheck * numberToCheck + 4n) ||
            this.isPerfectSquare(5n * numberToCheck * numberToCheck - 4n);
    }

    private isPerfectSquare(num: bigint): boolean {
        const sqrtNum = this.bigIntSqrt(num);
        return sqrtNum * sqrtNum === num;
    }

    private bigIntSqrt(num: bigint): bigint {
        if (num < 0n) {
            throw new Error("Cannot calculate square root of a negative number");
        }

        let x = num;
        let y = (x + 1n) / 2n;

        while (y < x) {
            x = y;
            y = (x + num / x) / 2n;
        }

        return x;
    }
}
