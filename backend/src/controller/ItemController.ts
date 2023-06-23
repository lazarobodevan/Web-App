import { Request, Response } from "express";
import db from '../database'
import { sendError } from "../utils/Error";

class ItemController{
    public async cadastrarItem(req: Request, res:Response){
        try{
            const {idProduto, quantidadeItem} = req.body;

            const newItem = await db.item.create({
                data:{
                    idProduto,
                    quantidadeItem
                }
            });

            return res.status(200).json(newItem);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

    public async getItens(req: Request, res: Response){
        try{
            const itens = await db.item.findMany({});
            return res.status(200).json(itens);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }
}

export default new ItemController();