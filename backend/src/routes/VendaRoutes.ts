import { Router, request, response } from "express";
import VendaController from "../controller/VendaController";
const router = Router();

router.get('/venda', VendaController.getVendas);
router.post('/venda', VendaController.cadastrarVenda);

export default router;