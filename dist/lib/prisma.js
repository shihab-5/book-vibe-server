"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Ensure DATABASE_URL is defined
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in .env file. Please configure your PostgreSQL connection.");
}
// Create adapter with PostgreSQL connection
const adapter = new adapter_pg_1.PrismaPg({ connectionString: DATABASE_URL });
// // Create and export Prisma client
const prisma = new client_1.PrismaClient({ adapter });
exports.default = prisma;
//# sourceMappingURL=prisma.js.map