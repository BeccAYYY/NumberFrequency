import { FibonacciChecker } from './services/FibonacciChecker';


class PerformanceTest {
    private readonly numbersToCheck: bigint[] = [
      987n,
      987n,
      987n,
      43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n,
      399999999999999n,
      1n,
      987n,
    ];
  
    private readonly iterations: number = 1000000;
  
    runTest(checker: NumberChecker, testName: string): void {
      for (const numberToCheck of this.numbersToCheck) {
        const startTime = performance.now();
  
        for (let i = 0; i < this.iterations; i++) {
          checker.meetsCriteria(numberToCheck);
        }
  
        const endTime = performance.now();
        const duration = endTime - startTime;
  
        console.log(`${testName} took ${duration.toFixed(2)} milliseconds for ${this.iterations} iterations with numberToCheck: ${numberToCheck}`);
      }
    }
  }
  

  const performanceTest = new PerformanceTest();
  const generatedListChecker = new FibonacciChecker();

  performanceTest.runTest(generatedListChecker, 'Generated List Fibonacci Checker');
