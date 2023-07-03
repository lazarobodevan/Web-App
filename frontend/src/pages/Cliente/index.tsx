import { useEffect, useState } from 'react'
import Button from '../../components/button'
import Dropdown from '../../components/dropdown'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'
import { ICliente } from '../../common/ICliente'
import ToastService from '../../common/toast/ToastService'
import ClienteService from '../../services/ClienteService'
import { ToastContainer } from 'react-toastify'
import { ICidade } from '../../common/ICidade'
import CidadeService from '../../services/CidadeService'
import { IDropdownOption } from '../../common/IDropdownOption'

export default function Cliente(){
    const [cliente, setCliente] = useState<ICliente>();
    const [cidades, setCidades] = useState<ICidade[]>([]);

    function handleChange(event:any){
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        
        setCliente((currentValues:any) =>{
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        });
    }

    function handleCadastro(event: any){
        
        if(!cliente){
            return ToastService.error('Todos os campos são obrigatórios.');
        }
        if(cliente && !cliente.nomeCliente){
            return ToastService.error('Insira o nome do cliente');
        }
        if(cliente && !cliente.enderecoCliente){
            return ToastService.error('Endereço é obrigatório')
        }
        if(cliente && !cliente.telefoneCliente){
            return ToastService.error('Telefone é obrigatório');
        }
        if(cliente && !cliente.idCidade){
            return ToastService.error('Cidade é obrigatória')
        }
        
        ClienteService.cadastrarCliente(cliente).then(body =>{
            ToastService.success("Cadastro realizado com sucesso!");
            setTimeout(()=>{
                window.location.reload();
            },5000);
        })
        .catch((error)=>{
            ToastService.error(error);
        });
    }

    function getClientesOptions(){
        const options: IDropdownOption[] = [];

        cidades?.forEach((cidade)=>{
            options.push({
                text: cidade.nomeCidade,
                value: cidade.codigoCidade || 0
            })
        })
        return options;
    }

    useEffect(()=>{
        CidadeService.getCidades().then((body)=>{
            setCidades(body)
        }).catch((error)=>{
            ToastService.error(error);
        })
    },[])

    return(
        <section>
            <Title>Cadastrar Cliente</Title>
            <section className={styles.content}>
                <Input onChange={(event)=>{handleChange(event)}} name='nomeCliente' type='text' placeholder='Nome' style={{width:'300px', gridArea:'name'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='enderecoCliente' type='text' placeholder='Endereço' style={{gridArea:'end'}}/>
                <Input onChange={(event)=>{handleChange(event)}} name='telefoneCliente' type='tel' placeholder='Telefone' style={{width:'282px', gridArea:'tel'}}/>
                <Dropdown defaultOption="Cidade" name='idCidade' onChange={(event)=>{handleChange(event)}} options={getClientesOptions()} style={{width:'282px', gridArea:'cid'}}/>
            </section>
            <Button onClick={(event)=>{handleCadastro(event)}}>Cadastrar</Button>
            <ToastContainer position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
        </section>
    )
}