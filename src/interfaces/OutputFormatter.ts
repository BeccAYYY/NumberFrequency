import { NumberRecord } from "models/NumberRecord";

export interface OutputFormatter {
    format(recordedNumbers: ReadonlyArray<NumberRecord>) : string;
}

