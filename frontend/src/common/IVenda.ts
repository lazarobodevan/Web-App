export interface IVenda{
    idCliente:number,
    idProduto:number,
    quantidadeProduto:number,
    desconto?: number | 0,
    valorPago: number
}