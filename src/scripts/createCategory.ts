import prisma from "../lib/prisma";

async function main(){
  const category = await prisma.category.create({
    data: { name: "Default Category" }
  });
  console.log(category.id);
  await prisma.$disconnect();
}

main().catch(async (e)=>{
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});