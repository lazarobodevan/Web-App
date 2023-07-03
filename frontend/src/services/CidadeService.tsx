import { API_BASE_URL } from "../common/API";
import { ICidade } from "../common/ICidade";

class CidadeService{
    public async getCidades(){
        const cidades = await fetch(`${API_BASE_URL}/cidade`)
            .then(resp => resp.json());
        return cidades;
    }
}

export default new CidadeService();