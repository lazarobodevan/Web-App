import { Router, request, response } from "express";
import CidadeController from "../controller/CidadeController";
const router = Router();

router.get('/cidade', CidadeController.getCidades);
router.post('/cidade', CidadeController.cadastrarCidade);

export default router;