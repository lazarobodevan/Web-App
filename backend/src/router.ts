import { Router } from "express";
import userRoutes from './routes/ClienteRoutes'
import cidadeRoutes from './routes/CidadeRoutes'
import fabricanteRoutes from './routes/FabricanteRoutes'
import produtoRoutes from './routes/ProdutoRoutes'

class Routes{
    static define(router:Router):Router{
        router.use(userRoutes);
        router.use(cidadeRoutes);
        router.use(fabricanteRoutes);
        router.use(produtoRoutes);

        return router;
    }
}

export default Routes.define(Router());