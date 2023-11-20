interface NumberRecorder {
    recordedNumbers : NumberRecord[];
    checkAndRecordNumber(numberToRecord: bigint, numberChecker: NumberChecker) : boolean;
}