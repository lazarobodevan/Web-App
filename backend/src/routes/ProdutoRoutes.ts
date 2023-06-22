import { Router, request, response } from "express";
import ProdutoController from "../controller/ProdutoController";
const router = Router();

router.get('/produto', ProdutoController.getProdutos);
router.post('/produto', ProdutoController.cadastrarProduto);

export default router;