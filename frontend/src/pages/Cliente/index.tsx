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
                <Input onChange={()=>{return}} type='text' placeholder='Nome' style={{width:'300px', gridArea:'name'}}/>
                <Input onChange={()=>{return}} type='text' placeholder='Endereço' style={{gridArea:'end'}}/>
                <Input onChange={()=>{return}} type='tel' placeholder='Telefone' style={{width:'282px', gridArea:'tel'}}/>
                <Input onChange={()=>{return}} type='text' placeholder='Cidade' style={{width:'282px', gridArea:'cid'}}/>
                <Input onChange={()=>{return}} type='number' placeholder='CEP' style={{width:'282px', gridArea:'cep'}}/>
                <Input onChange={()=>{return}} type='text' placeholder='Estado' style={{width:'282px', gridArea:'estado'}}/>
            </section>
            <Button onClick={()=>{return}}>Cadastrar</Button>
        </section>
    )
}