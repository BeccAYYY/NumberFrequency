import { NumberRecord } from "models/NumberRecord";

export interface NumberRecorder {
    recordedNumbers: ReadonlyArray<NumberRecord>;
    checkAndRecordNumber(numberToRecord: bigint) : boolean;
}