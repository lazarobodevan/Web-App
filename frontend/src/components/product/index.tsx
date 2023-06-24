import styles from './style.module.scss'
import favicon from '../../assets/images/logo192.png'
import { Link } from 'react-router-dom'

export default function Product(){
    return(
        <div className={styles.container}>
            <Link to={'./produto'}>
                <img src={favicon} alt='Produto'/>
                <div className={styles.info}>
                    <span>Cadeira</span>
                    <span>R$150,00</span>
                </div>
            </Link>
        </div>
    )
}