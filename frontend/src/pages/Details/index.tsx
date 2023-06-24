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

export default function Details(){

    const params = useParams();
    const [produto, setProduto] = useState<IProduto>({
        descricaoProduto: '',
        estoqueProduto:0,
        idFabricante: -1,
        idProduto: -1,
        nomeProduto: "undefined",
        precoCusto: "-1",
        precoVenda: "-1"
    });

    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);

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
    
    useEffect(()=>{
        fetch(`${API_BASE_URL}/produto?id=${params.id}`)
            .then(res => res.json())
            .then(res =>{
                setProduto(res[0]);
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
                        name='Quantidade' 
                        options={getQuantidade(produto.estoqueProduto)} 
                        style={{width:'282px'}}
                        onChange={setQuantidadeSelecionada}
                    />
                    <Input type='tel' placeholder='Telefone do cliente' style={{width:'282px'}}/>
                    <span className={styles.total}>Total: R${quantidadeSelecionada * Number(produto.precoVenda) || '0.00'}</span>
                </div>

                <Button style={{gridArea:"btn", marginLeft:"130px"}}>Comprar</Button>

                <div className={styles.image_wrapper}>
                    <img src={image}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.price}>R${produto.precoVenda}</p>
                    <span className={styles.available}>Disponível: {produto.estoqueProduto} unidades</span>
                </div>

            </section>
        </>
    )

}