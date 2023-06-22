import { Router } from "express";
import userRoutes from './routes/ClienteRoutes'
import cidadeRoutes from './routes/CidadeRoutes'
class Routes{
    static define(router:Router):Router{
        router.use(userRoutes);
        router.use(cidadeRoutes);

        return router;
    }
}

export default Routes.define(Router());