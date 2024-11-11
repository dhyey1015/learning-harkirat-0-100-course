// when we log the origin sql query it show $1 $2 for values what if we want to check its values
//this is a work around youc and do to do the above thing
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  })

async function main() {
    const users = await prisma.user.findMany({
        take: 2,
    });
};

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

prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});