import Button from '../../components/button'
import Dropdown from '../../components/dropdown'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'

export default function Cliente(){
    return(
        <section>
            <Title>Cadastrar Cliente</Title>
            <section className={styles.content}>
                <Input type='text' placeholder='Nome' style={{width:'300px', gridArea:'name'}}/>
                <Input type='text' placeholder='Endereço' style={{gridArea:'end'}}/>
                <Input type='tel' placeholder='Telefone' style={{width:'282px', gridArea:'tel'}}/>
                <Input type='text' placeholder='Cidade' style={{width:'282px', gridArea:'cid'}}/>
                <Input type='number' placeholder='CEP' style={{width:'282px', gridArea:'cep'}}/>
                <Input type='text' placeholder='Estado' style={{width:'282px', gridArea:'estado'}}/>
            </section>
            <Button>Cadastrar</Button>
        </section>
    )
}