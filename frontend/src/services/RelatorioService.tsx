import { API_BASE_URL } from "../common/API";

export class RelatorioService{
    public async getRelatorio(){
        return await fetch(`${API_BASE_URL}/relatorio`).then(res =>{return res.json()});
        
    }
}

export default new RelatorioService();