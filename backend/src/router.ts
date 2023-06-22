import { Router } from "express";
import userRoutes from './routes/UserRoutes'
class Routes{
    static define(router:Router):Router{
        router.use(userRoutes);

        return router;
    }
}

export default Routes.define(Router());