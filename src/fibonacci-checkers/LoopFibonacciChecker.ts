export class LoopFibonacciChecker implements NumberChecker {
    meetsCriteria(numberToCheck: bigint): boolean {
        let a: bigint = 0n;
        let b: bigint = 1n;

        while (b <= numberToCheck) {
            if (b === numberToCheck) {
                return true;
            }

            const next: bigint = a + b;
            a = b;
            b = next;
        }

        return false;
    }
}
