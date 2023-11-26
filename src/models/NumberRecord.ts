export class NumberRecord {
  value: bigint;
  occurrences: number;
  meetsCriteria: boolean;

  constructor(data: {value: bigint, occurrences: number, meetsCriteria: boolean}) {
    this.value = data.value;
    this.occurrences = data.occurrences;
    //Saves if a number meets the criteria to save re-checking
    this.meetsCriteria = data.meetsCriteria;
  }
}