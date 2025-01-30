import { Request, Response } from "express";



export class AuthController { 
    constructor() { }

    register(request: Request, response: Response) {
        response.json({ message: 'Register' });
    }

    loginUser(request: Request, response: Response) {
        response.json({ message: 'login' });
    }

    validateEmail(request: Request, response: Response) {
        response.json({ message: 'Validate Email' });
    }
}