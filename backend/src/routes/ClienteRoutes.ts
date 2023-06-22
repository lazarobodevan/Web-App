import { Router, request, response } from "express";
import ClienteController from "../controller/ClienteController";
const router = Router();

router.get('/user', ClienteController.getClientes);
router.post('/user', ClienteController.cadastrarCliente);

export default router;