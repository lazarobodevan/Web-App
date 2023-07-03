import { useEffect, useState } from 'react'
import Button from '../../components/button'
import Dropdown from '../../components/dropdown'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'
import { IFabricante } from '../../common/IFabricante'
import FabricanteService from '../../services/FabricanteService'
import { IDropdownOption } from '../../common/IDropdownOption'
import { IProduto } from '../../common/IProduto'
import ToastService from '../../common/toast/ToastService'
import ProductsService from '../../services/ProductsService'

export default function Produto(){
    const [produto, setProduto] = useState<IProduto>();
    const [fabricantes, setFabricantes] = useState<IFabricante[]>();

    function handleChange(event:any){
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        
        setProduto((currentValues:any) =>{
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        });
    }

    function getFabricantesOptions(){
        const options: IDropdownOption[] = [];

        fabricantes?.forEach((fabricante)=>{
            options.push({
                text: fabricante.nomeFabricante,
                value: fabricante.idFabricante || 0
            })
        })
        return options;
    }

    function handleCadastro(event:any){
        if(!produto){
            return ToastService.error('Todos os campos são obrigatórios.')
        }else{
            if(!produto.descricaoProduto){
                return ToastService.error('Descrição é obrigatória');
            }
            if(!produto.nomeProduto){
                return ToastService.error('Nome é obrigatório');
            }
            if(!produto.estoqueProduto || produto.estoqueProduto < 0){
                return ToastService.error('Estoque é obrigatório');
            }
            if(!produto.precoCusto || Number(produto.precoCusto) < 0.01){
                return ToastService.error('Preço de custo é obrigatório');
            }
            if(!produto.precoVenda || Number(produto.precoVenda) < 0.01){
                return ToastService.error('Preço de venda é obrigatório');
            }
            if(!produto.idFabricante){
                return ToastService.error('Fabricante é obrigatório');
            }
        }
        event.preventDefault();

        ProductsService.cadastrarProduto(produto).then(body =>{
            ToastService.success("Cadastro realizado com sucesso!");
            setTimeout(()=>{
                window.location.reload();
            },5000);
        }).catch(error =>{
            ToastService.error(error);
        })
    }

    useEffect(()=>{
        FabricanteService.getFabricantes().then(body =>{
            setFabricantes(body);
        })
    },[])

    return(
        <section>
            <Title>Cadastrar Produto</Title>
            <section className={styles.content}>
                <Input onChange={(event)=>{handleChange(event)}} name='nomeProduto' type='text' placeholder='Nome' style={{width:'300px', gridArea:'name'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='descricaoProduto' type='text' placeholder='Descrição' style={{width:'400px', gridArea:'desc'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='estoqueProduto' type='number' placeholder='Estoque' style={{width:'282px', gridArea:'esto'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='precoCusto' type='number' placeholder='Preço de custo' style={{width:'282px', gridArea:'custo'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='precoVenda' type='number' placeholder='Preço de venda' style={{width:'282px', gridArea:'venda'}}/>
                <Dropdown 
                    name={'idFabricante'} 
                    defaultOption='Fabricante' 
                    options={getFabricantesOptions()}
                    style={{width:'282px', gridArea:'fab'}}
                    onChange={(event)=>{handleChange(event)}}
                />
            </section>
            <Button onClick={(event)=>{handleCadastro(event)}}>Cadastrar</Button>
        </section>
    )
}