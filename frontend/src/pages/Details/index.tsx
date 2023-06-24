import styles from './style.module.scss'
import image from '../../assets/images/logo192.png'
import Title from '../../components/title'
import Button from '../../components/button'
import Input from '../../components/input'
import Dropdown from '../../components/dropdown'

export default function Details(){

    return(
        <>
            <section className={styles.content}>

                <div className={styles.title}>
                    <Title >Cadeira de madeira</Title>
                </div>
                <div className={styles.form}>
                    <Dropdown defaultOption={'Opah, beleza'} name='Quantidade' options={[]} style={{width:'282px'}}/>
                    <Input type='tel' placeholder='Telefone do cliente' style={{width:'282px'}}/>
                    <span className={styles.total}>Total: R$150,00</span>
                </div>

                <Button style={{gridArea:"btn", marginLeft:"130px"}}>Cadastrar</Button>

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