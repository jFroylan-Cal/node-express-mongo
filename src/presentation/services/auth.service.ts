import { UserModel } from "../../data/mongo/models/user.model";
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
            await user.save();

            //TODO encrypt password

            

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


}



