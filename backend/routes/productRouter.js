import { Router } from "express";
import ProductController from "../controllers/productController.js";

const router = new Router();

router.get('/', ProductController.getAllProducts);
router.post('/create', ProductController.createProduct);
router.delete('/delete/:id', ProductController.deleteProduct);

export default router;