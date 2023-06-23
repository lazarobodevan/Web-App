import { Request, Response } from "express";
import db from '../database';
import { sendError } from "../utils/Error";

class VendaController{
    public async cadastrarVenda(req: Request, res: Response){
        try{
            const {idCliente, 
                    idProduto,
                    quantidadeProduto, 
                    desconto, 
                    valorPago, 
                } = req.body;


            const produtoSolicitado = await db.produto.findUnique({where:{
                idProduto
            }});

            const isQuantidadeDisponivel = produtoSolicitado && produtoSolicitado.estoqueProduto >= quantidadeProduto || false;
            const valorTotal = quantidadeProduto * Number(produtoSolicitado?.precoVenda) || 0;
            const isValorPagoSuficiente = valorPago >= valorTotal;
            const dataVenda = new Date();

            if(!isQuantidadeDisponivel){
                return res.status(400).json({
                    error: "Quantidade insuficiente em estoque"
                });
            }
            
            if(!isValorPagoSuficiente){
                return res.status(400).json({
                    error: "Valor pago insuficiente"
                });
            }

            const newItem = await db.item.create({
                data:{
                    idProduto,
                    quantidadeItem: quantidadeProduto
                }
            })
            
            
            const newQtdEstoque = (produtoSolicitado && produtoSolicitado.estoqueProduto - quantidadeProduto) || 0;

            const newVenda = await db.venda.create({
                data:{
                    idCliente,
                    idItem: newItem.idItem,
                    valorPago,
                    valorTotal,
                    desconto,
                    dataVenda
                }
            });

            await db.produto.update(
                {
                    data:{
                        estoqueProduto: newQtdEstoque
                    },
                    where:{
                        idProduto
                    }
                }
            )

            return res.status(200).json(newVenda);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

    public async getVendas(req: Request, res: Response){
        try{
            const vendas = await db.venda.findMany({});
            return res.status(200).json(vendas);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }
}

export default new VendaController();