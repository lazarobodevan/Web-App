import { API_BASE_URL } from "../common/API";
import { IFabricante } from "../common/IFabricante";

class FabricanteService{
    public async getFabricantes(){
        const fabricantes = await fetch(`${API_BASE_URL}/fabricante`).then(resp => resp.json());
        return fabricantes;
    }

    public async cadastrarFabricante(fabricante: IFabricante){
        const newFabricante = await fetch(`${API_BASE_URL}/fabricante`,
            {
                method:'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    nomeFabricante: fabricante.nomeFabricante,
                    siteFabricante: fabricante.siteFabricante
                })
            }
        ).then(resp => resp.json());

        return newFabricante;
    }
}

export default new FabricanteService();