import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { AuthService } from "../services/auth.service";



export class AuthController { 
    constructor(
        public readonly authService: AuthService,
    ) { }

    /**
     * Register user Controller
     * @param registerUserDto 
     */
    
    register = (request: Request, response: Response) =>{
        const [error, registerDto] = RegisterUserDto.create(request.body);

        if (error) return response.status(400).json({ error });
        
        this.authService.registerUser(registerDto!)
            .then((user) => {
                response.json({ user });
            })
    }

    loginUser = (request: Request, response: Response) => {
        response.json({ message: 'login' });
    }

    validateEmail = (request: Request, response: Response) => {
        response.json({ message: 'Validate Email' });
    }
}