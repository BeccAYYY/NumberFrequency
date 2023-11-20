import * as fs from 'fs';

function generateFibonacciList(limit: number): bigint[] {
  const fibonacciList: bigint[] = [0n, 1n];

  for (let i = 2; i <= limit; i++) {
    const next = fibonacciList[i - 1] + fibonacciList[i - 2];
    fibonacciList.push(next);
  }

  return fibonacciList;
}

function saveFibonacciListToFile(fibonacciList: bigint[], filePath: string): void {
  const content = fibonacciList.join('\n');

  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fibonacci list saved to ${filePath}`);
  } catch (error: any) {
    console.error('Error saving Fibonacci list to file:', error.message);
  }
}

const limit = 1000;
const filePath = './data/fibonacci-numbers-list.txt';

const fibonacciList = generateFibonacciList(limit);
saveFibonacciListToFile(fibonacciList, filePath);