import { Router, request, response } from "express";
import ItemController from "../controller/ItemController";
const router = Router();

router.get('/item', ItemController.getItens);
router.post('/item', ItemController.cadastrarItem);

export default router;