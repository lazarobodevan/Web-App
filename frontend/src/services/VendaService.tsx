import { API_BASE_URL } from "../common/API";
import { IVenda } from "../common/IVenda";

class VendaService{
    public async cadastrarVenda(venda:IVenda){

        return await fetch(`${API_BASE_URL}/venda`,
            {
                method:'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(venda)
            }
        ).then(res=> res.json());
    }
}

export default new VendaService();