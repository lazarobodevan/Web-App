import db from "../database";
import { Request, Response} from "express";
import { sendError } from "../utils/Error";
class CidadeController{
    public async cadastrarCidade(req: Request, res:Response){
        try{
            const {codigoCidade, nomeCidade, estadoCidade} = req.body;

            const newCidade = await db.cidade.create({
                data:{
                    codigoCidade,
                    nomeCidade,
                    estadoCidade
                }
            })

            return res.status(200).json(newCidade);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

    public async getCidades(req:Request, res:Response){
        try{
            const cidades = await db.cidade.findMany({});

            return res.status(200).json(cidades);

        }catch(e:any){
            console.log(e);
            return sendError(e);

        }
    }
}

export default new CidadeController();