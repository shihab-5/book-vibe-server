"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Prisma Express Starter API",
    });
});
// API Routes
app.use("/api/v1", routes_1.default);
// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map