import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['info', 'query']})

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email: 'test2@gmail.com',
        name: 'dhyey kakadiya'
    }
  })
}

main()
  .then(async () => {
    console.log("done with query")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })