import { API_BASE_URL } from "../common/API";
import { ICliente } from "../common/ICliente";

class ClienteService{

    public async getClientes(){

        const clientes = await fetch(`${API_BASE_URL}/cliente`)
            .then(resp => resp.json());
        return clientes;

    }

    public async cadastrarCliente(cliente: ICliente){
        const newCliente = await fetch(`${API_BASE_URL}/cliente`,{method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nomeCliente: cliente.nomeCliente,
                enderecoCliente: cliente.enderecoCliente,
                telefoneCliente: cliente.telefoneCliente,
                idCidade: Number(cliente.idCidade)

        })}).then(resp => resp.json());
        return newCliente;
    }
}

export default new ClienteService();