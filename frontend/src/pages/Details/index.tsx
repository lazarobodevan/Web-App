import styles from './style.module.scss'
import image from '../../assets/images/logo192.png'
import Title from '../../components/title'

export default function Details(){

    return(
        <>
            <section className={styles.content}>

                <div className={styles.title}>
                    <Title >Cadeira de madeira</Title>
                </div>
                <div className={styles.form}>
                    <select className={styles.input}>
                        <option value="opa beleza">Opah, beleza?</option>
                    </select>
                    <input className={styles.input} type='tel' placeholder='Telefone do cliente'/>
                    <span className={styles.total}>Total: R$150,00</span>
                </div>

                <button className={styles.btn}>Comprar</button>

                <div className={styles.image_wrapper}>
                    <img src={image}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.price}>R$150,00</p>
                    <span className={styles.available}>Disponível: 10 unidades</span>
                </div>

            </section>
        </>
    )

}