import styles from './styles.module.scss';
import Header from "../../components/header";
import Product from '../../components/product';

export default function Home(){
    return(
        <>
            <section className={styles.content}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </section>
        </>
    )
}