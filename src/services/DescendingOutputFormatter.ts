import { NumberRecord } from "models/NumberRecord";
import { OutputFormatter } from "../interfaces/OutputFormatter";

export class DescendingOutputFormatter implements OutputFormatter {
    format(recordedNumbers: ReadonlyArray<NumberRecord>): string {
        const sortedRecords = [...recordedNumbers].sort(
            (a, b) => b.occurrences - a.occurrences
        );

        const output = sortedRecords
            .map(
                (record) => `${record.value}:${record.occurrences}`
            )
            .join(', ');

        return output;
    }
}
