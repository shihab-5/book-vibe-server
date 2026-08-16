"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("@/lib/prisma"));
async function main() {
    const category = await prisma_1.default.category.create({
        data: { name: "Default Category" }
    });
    console.log(category.id);
    await prisma_1.default.$disconnect();
}
main().catch(async (e) => {
    console.error(e);
    await prisma_1.default.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=createCategory.js.map