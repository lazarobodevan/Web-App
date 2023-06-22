import { PrismaClient } from "@prisma/client";

class Database{

    public connection!: PrismaClient;

    constructor(){
        try{
            console.log("Conectando ao banco de dados...");
            this.connection = new PrismaClient()
            console.log("Conectado ao banco de dados");
        }catch(e){
            console.log(e);
        }
    }

}

export default new Database().connection;