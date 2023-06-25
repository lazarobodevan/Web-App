import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'

export default function Fabricante(){
    return(
        <section>
            <Title>Cadastrar Fabricante</Title>
            <section className={styles.content}>
                <Input onChange={()=>{return}} type='text' placeholder='Nome' />
                <Input onChange={()=>{return}} type='text' placeholder='Site' />
            </section>
            <Button onClick={()=>{return}}>Cadastrar</Button>
        </section>
    )
}