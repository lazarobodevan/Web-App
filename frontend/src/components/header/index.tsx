import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Header(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Storefy</h2>
            <nav className={styles.nav}>
                <Link to={'./'} className={styles.nav_item}>Home</Link>
                <Link to={'./cliente'} className={styles.nav_item}>Clientes</Link>
                <Link to={'./produto'} className={styles.nav_item}>Produtos</Link>
                <Link to={'./fabricante'} className={styles.nav_item}>Fabricantes</Link>
                <Link to={'./relatorio'} className={styles.nav_item}>Relatorio</Link>
            </nav>
        </div>
    )
}