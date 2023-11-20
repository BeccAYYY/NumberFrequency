class NumberRecord {
  value: bigint;
  occurences: number;
  meetsCriteria: boolean;

  constructor(data: {value: bigint, occurences: number, meetsCriteria: boolean}) {
    this.value = data.value;
    this.occurences = data.occurences;
    this.meetsCriteria = data.meetsCriteria;
  }
}