import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { UserModel } from "../../data/mongo/models/user.model";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";


export class AuthService { 
    constructor() { }

    /**
     * Register User Service
     * @param {registerUserDto} 
     * @returns {Promise<UserModel>}
     * @throws {CustomError}
     */
    public async registerUser(registerUserDto: RegisterUserDto) { 

        const existUser = await UserModel.findOne({ email: registerUserDto.email });
        
        if (existUser) throw CustomError.badRequest("Email already exists");

        try {

            const user = new UserModel(registerUserDto);    

            user.password = BcryptAdapter.hashPassword(registerUserDto.password);

            await user.save();

            //TODO JWT Token

            //TODO send email confirmation

            const { password, ...userEntity } = UserEntity.fromObject(user);
            
            return {
                ...userEntity,
                token: "token"
            };
        } catch (error) {

            throw CustomError.internalServerError(`${error}`);
        
        }

    }


    public async loginUser(loginUserDto: LoginUserDto) {
        
        const user = await UserModel.findOne({ email: loginUserDto.email });
        
        if (!user) throw CustomError.badRequest("Verify your credentials");

        const isMatch = BcryptAdapter.comparePassword(loginUserDto.password, user.password);

        if (!isMatch) throw CustomError.badRequest("Verify your credentials");

        const { password, ...userEntity } = UserEntity.fromObject(user);

        return {
            ...userEntity,
            token: "token"
        };
    }

}



