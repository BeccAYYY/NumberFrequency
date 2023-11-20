import { FibonacciChecker }  from '../src/services/FibonacciChecker';

describe('FibonacciChecker', () => {
  test('should correctly check if a number is a Fibonacci number', () => {
    const fibonacciChecker = new FibonacciChecker();

    // Fibonacci numbers
    expect(fibonacciChecker.meetsCriteria(0n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(1n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(2n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(3n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(5n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(8n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(13n)).toBe(true);
    expect(fibonacciChecker.meetsCriteria(26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626n)).toBe(true);

    // Non-Fibonacci numbers
    expect(fibonacciChecker.meetsCriteria(4n)).toBe(false);
    expect(fibonacciChecker.meetsCriteria(7n)).toBe(false);
    expect(fibonacciChecker.meetsCriteria(10n)).toBe(false);
    expect(fibonacciChecker.meetsCriteria(15n)).toBe(false);
    expect(fibonacciChecker.meetsCriteria(20n)).toBe(false);
    expect(fibonacciChecker.meetsCriteria(26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174625n)).toBe(false);

    // The 1001st fibonacci number
    expect(fibonacciChecker.meetsCriteria(43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n)).toBe(false);
  });

  test('should return false for negative numbers', () => {
    const fibonacciChecker = new FibonacciChecker();
    expect(fibonacciChecker.meetsCriteria(-5n)).toBe(false);
  });
});