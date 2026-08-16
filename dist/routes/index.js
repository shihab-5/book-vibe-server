"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("@/services/books"));
const categories_1 = __importDefault(require("@/services/categories"));
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.use("/users", users);
router.use("/books", books_1.default);
router.use("/categories", categories_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map