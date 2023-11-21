import { NumberRecord } from '../models/NumberRecord'
import { NumberRecorder } from 'interfaces/NumberRecorder';

export class NumberRecorderClass implements NumberRecorder {
    private _recordedNumbers: NumberRecord[] = [];
    private numberChecker: NumberChecker;

    constructor(numberChecker: NumberChecker) {
        this.numberChecker = numberChecker;
    }

    get recordedNumbers(): ReadonlyArray<NumberRecord> {
        return this._recordedNumbers;
    }

    checkAndRecordNumber(numberToRecord: bigint): boolean {
        const priorEntry = this._recordedNumbers.find((recordedNumber) => recordedNumber.value === numberToRecord);

        if (priorEntry) {
            priorEntry.occurrences++;
            return priorEntry.meetsCriteria;
        }

        const newNumberRecord = new NumberRecord({
            value: numberToRecord,
            occurrences: 1,
            meetsCriteria: this.numberChecker.meetsCriteria(numberToRecord)
        });
        this._recordedNumbers.push(newNumberRecord);
        return newNumberRecord.meetsCriteria;
    }
}