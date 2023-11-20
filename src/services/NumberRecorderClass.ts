class NumberRecorderClass implements NumberRecorder {
    recordedNumbers: NumberRecord[] = [];
    checkAndRecordNumber(numberToRecord: bigint, numberChecker: NumberChecker) : boolean {
        const priorEntry = this.recordedNumbers.find((recordedNumber) => recordedNumber.value === numberToRecord)

        if (priorEntry) {
            priorEntry.occurences++;
            return priorEntry.meetsCriteria;
        }

        const newNumberRecord = new NumberRecord({ 
            value: numberToRecord, 
            occurences: 1, 
            meetsCriteria: numberChecker.meetsCriteria(numberToRecord) 
        });
        this.recordedNumbers.push(newNumberRecord);
        return newNumberRecord.meetsCriteria;
    }
}