import { Router } from "express";
import userRoutes from './routes/ClienteRoutes'
import cidadeRoutes from './routes/CidadeRoutes'
import fabricanteRoutes from './routes/FabricanteRoutes'
import produtoRoutes from './routes/ProdutoRoutes'
import itemRoutes from './routes/ItemRoutes'
import vendaRoutes from './routes/VendaRoutes'
import relatorioRoutes from './routes/RelatorioRoutes'

class Routes{
    static define(router:Router):Router{
        router.use(userRoutes);
        router.use(cidadeRoutes);
        router.use(fabricanteRoutes);
        router.use(produtoRoutes);
        router.use(itemRoutes);
        router.use(vendaRoutes);
        router.use(relatorioRoutes);

        return router;
    }
}

export default Routes.define(Router());