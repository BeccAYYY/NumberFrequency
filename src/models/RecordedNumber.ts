class NumberRecord {
  value: bigint;
  occurrences: number;
  meetsCriteria: boolean;

  constructor(data: {value: bigint, occurrences: number, meetsCriteria: boolean}) {
    this.value = data.value;
    this.occurrences = data.occurrences;
    this.meetsCriteria = data.meetsCriteria;
  }
}