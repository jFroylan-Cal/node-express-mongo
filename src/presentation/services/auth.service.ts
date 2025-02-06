import { UserModel } from "../../data/mongo/models/user.model";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { CustomError } from "../../domain/errors/custom.error";


export class AuthService { 
    constructor() { }

    /**
     * Register User Service
     * @param {registerUserDto} 
     */
    public async registerUser(registerUserDto: RegisterUserDto) { 

        const existUser = await UserModel.findOne({ email: registerUserDto.email });
        
        if (existUser) throw CustomError.badRequest("Email already exists");

        return 'todo ok';

    }


}



