import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'

export default function Fabricante(){
    return(
        <section>
            <Title>Cadastrar Fabricante</Title>
            <section className={styles.content}>
                <Input type='text' placeholder='Nome' />
                <Input type='text' placeholder='Site' />
            </section>
            <Button>Cadastrar</Button>
        </section>
    )
}