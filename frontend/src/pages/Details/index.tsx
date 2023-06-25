import styles from './style.module.scss'
import image from '../../assets/images/logo192.png'
import Title from '../../components/title'
import Button from '../../components/button'
import Input from '../../components/input'
import Dropdown from '../../components/dropdown'
import { IDropdownOption } from '../../common/IDropdownOption'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IProduto } from '../../common/IProduto'
import { API_BASE_URL } from '../../common/API'
import { stringify } from 'querystring'
import { ICliente } from '../../common/ICliente'
import ProductsService from '../../services/ProductsService'
import ClienteService from '../../services/ClienteService'
import ToastService from '../../common/toast/ToastService'
import { ToastContainer } from 'react-toastify'
import { IVenda } from '../../common/IVenda'
import VendaService from '../../services/VendaService'


export default function Details(){

    const params = useParams();
    const [produto, setProduto] = useState<IProduto>({
        descricaoProduto: '',
        estoqueProduto:0,
        idFabricante: -1,
        idProduto: -1,
        nomeProduto: "",
        precoCusto: "-1",
        precoVenda: "-1"
    });

    const [clientes, setClientes] = useState<ICliente[]>();
    const [venda, setVenda] = useState<IVenda>();

    function getQuantidade(qtd:number){
        let options:IDropdownOption[] = [];

        for(let i = 0; i < qtd; i++){
            options.push({
                text: `${i+1}`,
                value: i+1
            })
        }
        return options;
    }

    function calcTotal(){
        return (venda?.quantidadeProduto || 0) * Number(produto.precoVenda) || '0.00'
    }

    function getClientesOptions(): IDropdownOption[]{
        const options: IDropdownOption[] = [];

        clientes?.forEach((cliente)=>{
            options.push({
                text: cliente.nomeCliente,
                value: cliente.idCliente
            })
        })
        return options;
    }

    function handleChange(event:any){
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        
        setVenda((currentValues:any) =>{
            return {
                ...currentValues,
                [fieldName]:Number(fieldValue),
                idProduto: Number(params.id),
                desconto:0
            }
        });
    }

    function handleCompra(event?:any){
        if(produto.estoqueProduto === 0){
            return ToastService.error('Produto indisponível');
        }
        if(!venda){
            return ToastService.error('Todos os campos são obrigatórios.');
        }
        if(venda && !venda.idCliente){
            return ToastService.error('Selecione um cliente');
        }
        if(venda && !venda.quantidadeProduto){
            return ToastService.error('Selecione uma quantidade')
        }
        if((venda?.valorPago || 0) < Number(calcTotal())){
            return ToastService.error('Valor pago insuficiente');
        }
        console.log(venda)
        event.preventDefault();
        VendaService.cadastrarVenda(venda).then((body)=>{
            ToastService.success("Venda realizada com sucesso!");
            setTimeout(()=>{

            },5000);
            window.location.reload();
        }).catch((error)=>{
            ToastService.error(error);
        });

    }
    
    useEffect(()=>{
        ProductsService.getProducts(Number(params.id)).then(res =>
            setProduto(res[0])
        );
        ClienteService.getClientes().then(res =>{
            setClientes(res);
        })

    },[])

    return(
        <>
            <section className={styles.content}>

                <div className={styles.title}>
                    <Title >{produto.nomeProduto}</Title>
                </div>
                <div className={styles.form}>
                    <Dropdown 
                        defaultOption={'Quantidade'} 
                        name='quantidadeProduto' 
                        options={getQuantidade(produto.estoqueProduto)} 
                        style={{width:'282px'}}
                        onChange={(event) => handleChange(event)}
                    />
                    <Dropdown defaultOption={'Cliente'} name='idCliente' options={getClientesOptions()} onChange={(event) => handleChange(event)} style={{width:'282px'}}/>
                    <Input type='number' onChange={(event) => handleChange(event)} name='valorPago' style={{width: '282px'}} placeholder='Valor pago'/>
                    <span className={styles.total}>Total: R${(venda?.quantidadeProduto || 0) * Number(produto.precoVenda) || '0.00'}</span>
                </div>

                <Button 
                    style={{gridArea:"btn", marginLeft:"130px"}}
                    onClick={(event)=>handleCompra(event)}
                >
                    Comprar
                </Button>
                <div className={styles.image_wrapper}>
                    <img src={image}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.price}>R${produto.precoVenda}</p>
                    <span className={styles.available}>Disponível: {produto.estoqueProduto} unidades</span>
                </div>

            </section>
            <ToastContainer position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
        </>
    )

}