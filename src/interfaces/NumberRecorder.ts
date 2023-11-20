interface NumberRecorder {
    recordedNumbers : NumberRecord[];
    checkAndRecordNumber(numberToRecord: bigint) : boolean;
}