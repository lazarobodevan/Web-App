import { useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './styles.module.scss'
import { IFabricante } from '../../common/IFabricante'
import ToastService from '../../common/toast/ToastService'
import FabricanteService from '../../services/FabricanteService'
import { ToastContainer } from 'react-toastify'

export default function Fabricante(){
    const [fabricante, setFabricante] = useState<IFabricante>();

    function handleChange(event:any){
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        
        setFabricante((currentValues:any) =>{
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        });
    }

    function handleCadastro(event: any){
        if(!fabricante){
            return ToastService.error('Todos os campos são obrigatórios.');
        }else{
            if(!fabricante.nomeFabricante){
                return ToastService.error('Nome é obrigatório');
            }
            if(!fabricante.siteFabricante){
                return ToastService.error('Site é obrigatório');
            }
        }
        event.preventDefault();

        FabricanteService.cadastrarFabricante(fabricante).then(resp =>{
            ToastService.success("Cadastro realizado com sucesso!");
            setTimeout(()=>{
                window.location.reload();
            },5000);
        }).catch(error =>{
            return ToastService.error(error);
        });
    }

    return(
        <section>
            <Title>Cadastrar Fabricante</Title>
            <section className={styles.content}>
                <Input onChange={(event)=>{handleChange(event)}} name='nomeFabricante' type='text' placeholder='Nome' />
                <Input onChange={(event)=>{handleChange(event)}} name='siteFabricante' type='text' placeholder='Site' />
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