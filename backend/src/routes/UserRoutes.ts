import { Router, request, response } from "express";

const router = Router();

router.get('/user', (request, response) => {
    response.json({
        message: "user"
    })
});

export default router;