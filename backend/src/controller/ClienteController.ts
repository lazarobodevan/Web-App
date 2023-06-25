import db from "../database";
import { Request, Response} from "express";
class ClienteController{

    public async cadastrarCliente(req:Request, res:Response){
        try{
            const {nomeCliente, enderecoCliente, telefoneCliente, idCidade} = req.body;
            const newCliente = await db.cliente.create({
                data:{
                    nomeCliente,
                    enderecoCliente,
                    telefoneCliente,
                    idCidade
                }
            });

            return res.status(200).json(newCliente);

        }catch(e){
            console.log(e);
            return res.status(500).json({
                error: e
            });
        }
    }

    public async getClientes(req:Request, res:Response){
        try{
            const clientes = await db.cliente.findMany({orderBy:{nomeCliente:'asc'}});

            return res.status(200).json(clientes);
        }catch(e){
            console.log(e);
            return res.status(500)
        }
    }

}

export default new ClienteController();