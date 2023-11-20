interface NumberRecorder {
    recordedNumbers: ReadonlyArray<NumberRecord>;
    checkAndRecordNumber(numberToRecord: bigint) : boolean;
}