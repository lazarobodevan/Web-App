import { API_BASE_URL } from "../common/API";

class ClienteService{

    public async getClientes(){

        const clientes = await fetch(`${API_BASE_URL}/cliente`)
            .then(resp => resp.json());
        return clientes;

    }
}

export default new ClienteService();