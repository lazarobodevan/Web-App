import styles from './style.module.scss'
import favicon from '../../assets/images/logo192.png'
import { Link } from 'react-router-dom'

interface Props{
    id: number,
    nome:string,
    preco:string
}

export default function Product({id, nome, preco}:Props){
    return(
        <Link to={`./produto/${id}`} className={styles.container}>
            <img src={favicon} alt='Produto'/>
            <div className={styles.info}>
                <span>{nome}</span>
                <span>R${preco}</span>
            </div>
        </Link>
    )
}