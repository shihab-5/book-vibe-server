import books from "../services/books";
import categories from "../services/categories";
import { Router } from "express";


const router = Router();
// router.use("/users", users);

router.use("/books",books);
router.use("/categories",categories);


export default router;