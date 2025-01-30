import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
    static get routes() {
        const router = Router();

        const controller = new AuthController();

        router.post('/login', controller.loginUser);
        router.post('/register', controller.register);
        router.get('/validate-email/:token', controller.validateEmail); 


        return router;
    }
}