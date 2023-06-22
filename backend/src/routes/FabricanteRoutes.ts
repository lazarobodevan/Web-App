import { Router, request, response } from "express";
import FabricanteController from "../controller/FabricanteController";
const router = Router();

router.get('/fabricante', FabricanteController.getFabricantes);
router.post('/fabricante', FabricanteController.cadastrarFabricante);

export default router;