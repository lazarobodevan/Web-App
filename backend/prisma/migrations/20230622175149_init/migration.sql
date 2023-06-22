-- CreateTable
CREATE TABLE "Cliente" (
    "idCliente" SERIAL NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "enderecoCliente" TEXT NOT NULL,
    "telefoneCliente" TEXT NOT NULL,
    "idCidade" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "codigoCidade" SERIAL NOT NULL,
    "nomeCidade" TEXT NOT NULL,
    "estadoCidade" TEXT NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("codigoCidade")
);

-- CreateTable
CREATE TABLE "Produto" (
    "idProduto" SERIAL NOT NULL,
    "descricaoProduto" TEXT NOT NULL,
    "estoqueProduto" INTEGER NOT NULL,
    "precoCusto" DECIMAL(65,30) NOT NULL,
    "precoVenda" DECIMAL(65,30) NOT NULL,
    "idFabricante" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("idProduto")
);

-- CreateTable
CREATE TABLE "Fabricante" (
    "idFabricante" SERIAL NOT NULL,
    "nomeFabricante" TEXT NOT NULL,
    "siteFabricante" TEXT NOT NULL,

    CONSTRAINT "Fabricante_pkey" PRIMARY KEY ("idFabricante")
);

-- CreateTable
CREATE TABLE "Venda" (
    "idVendas" SERIAL NOT NULL,
    "dataVenda" TIMESTAMP(3) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,
    "valorPago" DECIMAL(65,30) NOT NULL,
    "desconto" DECIMAL(65,30) NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idItem" INTEGER NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("idVendas")
);

-- CreateTable
CREATE TABLE "Item" (
    "idItem" SERIAL NOT NULL,
    "idProduto" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("idItem")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_idProduto_key" ON "Produto"("idProduto");

-- CreateIndex
CREATE UNIQUE INDEX "Item_idProduto_key" ON "Item"("idProduto");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_idCidade_fkey" FOREIGN KEY ("idCidade") REFERENCES "Cidade"("codigoCidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idFabricante_fkey" FOREIGN KEY ("idFabricante") REFERENCES "Fabricante"("idFabricante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Cliente"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
