import { NumberRecorderClass } from '../src/services/NumberRecorderClass';


export class MockNumberChecker implements NumberChecker {
    meetsCriteria(numberToCheck: bigint): boolean {
        return numberToCheck % 2n === 0n;
    }
}


describe('NumberRecorderClass', () => {
    let numberRecorder: NumberRecorderClass;

    beforeEach(() => {
        const mockNumberChecker = new MockNumberChecker();
        numberRecorder = new NumberRecorderClass(mockNumberChecker);
    });

    describe('checkAndRecordNumber', () => {
        it('should record a new number', () => {
            const result = numberRecorder.checkAndRecordNumber(42n);

            expect(result).toBe(true);
            expect(numberRecorder.recordedNumbers.length).toBe(1);
            expect(numberRecorder.recordedNumbers[0]).toEqual({
                value: 42n,
                occurrences: 1,
                meetsCriteria: true,
            });
        });

        it('should increment occurrences for an existing number', () => {
            numberRecorder['_recordedNumbers'] = [
                { value: 42n, occurrences: 1, meetsCriteria: true },
            ];

            const result = numberRecorder.checkAndRecordNumber(42n);

            expect(result).toBe(true);
            expect(numberRecorder.recordedNumbers.length).toBe(1);
            expect(numberRecorder.recordedNumbers[0]).toEqual({
                value: 42n,
                occurrences: 2,
                meetsCriteria: true,
            });
        });

        it('should return false if number does not meet criteria', () => {
            const result = numberRecorder.checkAndRecordNumber(43n);

            expect(result).toBe(false);
            expect(numberRecorder.recordedNumbers.length).toBe(1);
            expect(numberRecorder.recordedNumbers[0]).toEqual({
                value: 43n,
                occurrences: 1,
                meetsCriteria: false,
            });
        });
    });
});

