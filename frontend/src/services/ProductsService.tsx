import { API_BASE_URL } from "../common/API";

class ProductService{

    public async getProducts(id?:number){

        const products = await fetch(`${API_BASE_URL}/produto${id ? `?id=${id}` : ''}`)
            .then(resp => resp.json());
        return products;

    }
}

export default new ProductService();