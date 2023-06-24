import Button from '../../components/button'
import Dropdown from '../../components/dropdown'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'

export default function Produto(){
    return(
        <section>
            <Title>Cadastrar Produto</Title>
            <section className={styles.content}>
                <Input type='text' placeholder='Nome' style={{width:'300px', gridArea:'name'}}/>
                <Input type='text' placeholder='Descrição' style={{width:'400px', gridArea:'desc'}}/>
                <Input type='number' placeholder='Estoque' style={{width:'282px', gridArea:'esto'}}/>
                <Input type='number' placeholder='Preço de custo' style={{width:'282px', gridArea:'custo'}}/>
                <Input type='number' placeholder='Preço de venda' style={{width:'282px', gridArea:'venda'}}/>
                <Dropdown 
                    name={'fabricantes'} 
                    defaultOption='Fabricante' 
                    options={[]}
                    style={{width:'282px', gridArea:'fab'}}
                    onChange={()=>{return;}}
                />
            </section>
            <Button>Cadastrar</Button>
        </section>
    )
}