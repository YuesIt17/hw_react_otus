import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const question = (): Promise<null> =>
  new Promise(() => {
      rl.question('For calculation > ', (answer: string) => {
          console.log(`Result: ${answer}`)
      })
  })

async function app(): Promise<null> {
  while (true) {
    await question()
  }
}

app()
