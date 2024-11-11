import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main(){
    let res = await prisma.post.findMany({
        take : 1,  //"LIMIT" IN SQL
        skip: 1   //"OFFSET" IN SQL
    })
    console.log(res)
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