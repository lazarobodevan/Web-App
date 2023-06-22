import { Request, Response } from 'express'
import db from '../database'
import { sendError } from '../utils/Error';

class ProdutoController{

    public async cadastrarProduto(req: Request, res: Response){
        try{
            const {descricaoProduto, 
                    estoqueProduto, 
                    precoCusto, 
                    precoVenda, 
                    idFabricante
                } = req.body;
            
            const newProduto = await db.produto.create({
                data:{
                    descricaoProduto,
                    estoqueProduto,
                    precoCusto,
                    precoVenda,
                    idFabricante
                }
            });
            
            return res.status(200).json(newProduto);

        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

    public async getProdutos(req: Request, res: Response){
        try{
            const produtos = await db.produto.findMany({});

            return res.status(200).json(produtos);

        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }
}

export default new ProdutoController();