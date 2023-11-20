export class NumberRecorderClass implements NumberRecorder {
    recordedNumbers: NumberRecord[] = [];
    private numberChecker: NumberChecker;

    constructor(numberChecker: NumberChecker) {
        this.numberChecker = numberChecker;
    }

    checkAndRecordNumber(numberToRecord: bigint) : boolean {
        const priorEntry = this.recordedNumbers.find((recordedNumber) => recordedNumber.value === numberToRecord)

        if (priorEntry) {
            priorEntry.occurrences++;
            return priorEntry.meetsCriteria;
        }

        const newNumberRecord = new NumberRecord({ 
            value: numberToRecord, 
            occurrences: 1, 
            meetsCriteria: this.numberChecker.meetsCriteria(numberToRecord) 
        });
        this.recordedNumbers.push(newNumberRecord);
        return newNumberRecord.meetsCriteria;
    }
}