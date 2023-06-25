import { Router, request, response } from "express";
import ClienteController from "../controller/ClienteController";
const router = Router();

router.get('/cliente', ClienteController.getClientes);
router.post('/cliente', ClienteController.cadastrarCliente);

export default router;