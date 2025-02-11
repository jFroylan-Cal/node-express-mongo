import { regularExp } from "../../../config/regular-exp";

export class LoginUserDto {
    constructor(
        public email: string,
        public password: string,
    ) { }


    /**
     * Create Login User DTO
     * @param {object} object
     * @returns {[string?, LoginUserDto?]}
     *  
     */
    static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
        const { email, password } = object;
        
        if (!email) return ["Missing email"];
        
        if (!regularExp.email.test(email))  return ["Invalid email"];
                
        if (!password)   return ["Missing password"];
                
        if (password.length < 6)  return ["Password must be at least 6 characters"];
        
        return [undefined, new LoginUserDto(email, password)];
    }

}

