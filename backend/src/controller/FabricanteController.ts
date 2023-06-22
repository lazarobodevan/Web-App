import { Request, Response } from "express";
import db from '../database';
import { sendError } from "../utils/Error";

class FabricanteController{

    public async cadastrarFabricante(req: Request, res: Response){
        try{
            const {idFabricante, nomeFabricante, siteFabricante} = req.body;

            const newFabricante = await db.fabricante.create({
                data:{
                    nomeFabricante,
                    siteFabricante
                }
            });

            return res.status(200).json(newFabricante);
        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

    public async getFabricantes(req:Request, res: Response){
        try{
            const fabricantes = await db.fabricante.findMany({});
            return res.status(200).json(fabricantes);

        }catch(e:any){
            console.log(e);
            return sendError(e);
        }
    }

}

export default new FabricanteController();