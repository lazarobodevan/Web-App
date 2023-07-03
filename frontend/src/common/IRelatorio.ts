import { ICliente } from "./ICliente"
import { IProduto } from "./IProduto"

export interface IRelatorio{
    item:{
        produto:IProduto,
        quantidadeItem: number
    },
    cliente:ICliente,
    dataVenda: string,
    idVendas: Number,
    valorPago: Number,
    valorTotal: Number
}