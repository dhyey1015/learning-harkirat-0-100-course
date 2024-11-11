
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
     email: "harkirat3@gmail.com",
     name: "harkriat",
     posts: {
        create: [
            {
                title: "title1",
                content: 'content2'
            },
            {
                title: "title2",
                content: "content2"
            },
        ]
     }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })