/*
  Warnings:

  - A unique constraint covering the columns `[codigoCidade]` on the table `Cidade` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idCliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idFabricante]` on the table `Fabricante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idItem]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idVendas]` on the table `Venda` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Item_idProduto_key";

-- CreateIndex
CREATE UNIQUE INDEX "Cidade_codigoCidade_key" ON "Cidade"("codigoCidade");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_idCliente_key" ON "Cliente"("idCliente");

-- CreateIndex
CREATE UNIQUE INDEX "Fabricante_idFabricante_key" ON "Fabricante"("idFabricante");

-- CreateIndex
CREATE UNIQUE INDEX "Item_idItem_key" ON "Item"("idItem");

-- CreateIndex
CREATE UNIQUE INDEX "Venda_idVendas_key" ON "Venda"("idVendas");

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_idItem_fkey" FOREIGN KEY ("idItem") REFERENCES "Item"("idItem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("idProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
