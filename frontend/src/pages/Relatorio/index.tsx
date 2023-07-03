import { useEffect, useState } from 'react'
import Title from '../../components/title'
import styles from './styles.module.scss'
import { IRelatorio } from '../../common/IRelatorio'
import RelatorioService from '../../services/RelatorioService';

export default function Relatorio(){

    const [relatorio, setRelatorio] = useState<IRelatorio[]>();

    useEffect(()=>{
        RelatorioService.getRelatorio().then(body =>{
            setRelatorio(body);
            console.log(relatorio);
        })
    },[])

    return(
        <section className={styles.container}>
            <Title>Relatório</Title>
            <table className={styles.table}>
                <tr>
                    <th>Id Venda</th>
                    <th>Cliente</th>
                    <th>Produto</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Preco venda</th>
                    <th>Valor pago</th>
                    <th>Valor total</th>
                    <th>Data</th>
                </tr>
                {
                    relatorio?.map(item =>{
                        return <tr>
                            <td>{String(item.idVendas)}</td>
                            <td>{String(item.cliente.nomeCliente)}</td>
                            <td>{String(item.item.produto.nomeProduto)}</td>
                            <td>{String(item.item.produto.descricaoProduto).substring(0,20) + '...'}</td>
                            <td>{String(item.item.quantidadeItem)}</td>
                            <td>{'R$' + String(Number(item.item.produto.precoVenda).toFixed(2))}</td>
                            <td>{'R$' + String(Number(item.valorPago).toFixed(2))}</td>
                            <td>{'R$' + String(Number(item.valorTotal).toFixed(2))}</td>
                            <td>{String(item.dataVenda)}</td>
                        </tr>
                    })
                }
            </table>
        </section>
    )
}