import styles from './styles.module.scss';
import Header from "../../components/header";
import Product from '../../components/product';
import { useEffect, useState } from 'react';
import ProductsService from '../../services/ProductsService';
import { IProduto } from '../../common/IProduto';

export default function Home(){

    const [products, setProducts] = useState<IProduto[]>([]);

    useEffect(()=>{
        ProductsService.getProducts().then((body) =>{
            setProducts(body);
            console.log(products)
        });
    },[])

    return(
        <>
            <section className={styles.content}>
                {products.map((prod)=>{
                    return <Product id={prod.idProduto} nome={prod.nomeProduto} preco={prod.precoVenda}/>
                })}
            </section>
        </>
    )
}