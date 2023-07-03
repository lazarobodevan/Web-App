import { API_BASE_URL } from "../common/API";
import { IProduto } from "../common/IProduto";

class ProductService{

    public async getProducts(id?:number){

        const products = await fetch(`${API_BASE_URL}/produto/${id ? `${id}` : ''}`)
            .then(resp => resp.json());
        return products;

    }

    public async cadastrarProduto(produto:IProduto){
        const newProduto = await fetch(`${API_BASE_URL}/produto`,{
            headers: {'Content-Type': 'application/json'},
            method:'POST',
            body: JSON.stringify({
                nomeProduto: produto.nomeProduto,
                descricaoProduto: produto.descricaoProduto,
                estoqueProduto: Number(produto.estoqueProduto),
                precoCusto: Number(produto.precoCusto),
                precoVenda: Number(produto.precoVenda),
                idFabricante: Number(produto.idFabricante)
            })
        }).then(resp => resp.json());
        return newProduto;
    }
}

export default new ProductService();