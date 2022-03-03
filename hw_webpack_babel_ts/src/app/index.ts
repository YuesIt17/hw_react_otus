import {createInterface} from 'readline';
import {prepareInput} from '../utils/prepare/prepareInput';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> =>
  new Promise((resolve) => {
    rl.question('For calculation > ', (answer: string) => {
      const result = prepareInput(answer);

      if (result) {
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });

async function app(): Promise<void> {
  while (true) {
    await question();
  }
}

app();
