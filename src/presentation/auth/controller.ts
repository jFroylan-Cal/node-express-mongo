import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { AuthService } from "../services/auth.service";
import { CustomError } from "../../domain/errors/custom.error";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";



export class AuthController { 
    constructor(
        public readonly authService: AuthService,
    ) { }

    /**
     * Handle Error
     * @param {unknown} error
     * @param {Response} response   
     */
    private handleError = (error: unknown, response: Response) => {
        if (error instanceof CustomError) {
            return response.status(error.statusCode).json({ error: error.message });
        }
        console.log(error);
        return response.status(500).json({ error: "Internal Server Error" });
    }

    /**
     * Register user Controller
     * @param registerUserDto 
     * @returns {void}
     * @throws {CustomError}
     * @throws {Error}
     */

    register = (request: Request, response: Response) =>{
        const [error, registerDto] = RegisterUserDto.create(request.body);

        if (error) return response.status(400).json({ error });
        
        this.authService.registerUser(registerDto!)
            .then((user) => {
                response.json({ user });
            }).catch(error => {
                this.handleError(error, response);
            });
    }


    /**
     * Login User Controller
     * @param {Request} request
     * @param {Response} response
     * @returns {void}
     * @throws {CustomError}
     * @throws {Error}
     */
    loginUser = (request: Request, response: Response) => {
        const [error, loginUserDto] = LoginUserDto.create(request.body);
        
        if (error) return response.status(400).json({ error });
        
        this.authService.loginUser(loginUserDto!).then((user) => {
            response.json({ user });
        }).catch(error => {
            this.handleError(error, response);
        });
    }

    validateEmail = (request: Request, response: Response) => {
        response.json({ message: 'Validate Email' });
    }
}