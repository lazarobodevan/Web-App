import { API_BASE_URL } from "../common/API";

class ProductService{

    public async getProducts(){

        const products = await fetch(`${API_BASE_URL}/produto`)
            .then(resp => resp.json());
        return products;

    }

    public async getProductById(id:number){
        const product = await fetch(`${API_BASE_URL}/produto/${id}`)
            .then(resp => resp.json());

        return product;
    }
}

export default new ProductService();