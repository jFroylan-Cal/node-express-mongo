import { CustomError } from "../errors/custom.error";

/**
 * User Entity
 */
export class UserEntity {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public emailVerified: boolean,
        public password: string,
        public role: string[],
        public img?: string, 
    ) { }
    
    /**
     * Create User Entity from Object
     * @param {object} object
     * @return {UserEntity} 
     */
    static fromObject(object: { [key: string]: any }) { 
        const { id, _id, name, email, emailVerified, password, role, img } = object;
        if (!id && !_id) {
            throw CustomError.badRequest('User id is required');
        }
        if (!name) {
            throw CustomError.badRequest('User name is required');
        }

        if (!email) {
            throw CustomError.badRequest('User email is required');
        }

        if (emailVerified === undefined) {
            throw CustomError.badRequest('Missing emailVerified');
        }
        
        if (!password) {
            throw CustomError.badRequest('User password is required');
        }

        if (!role) {
            throw CustomError.badRequest('User role is required');
        }

        return new UserEntity(
            _id || id,
            name,
            email,
            emailVerified,
            password,
            role,
            img
        );


    }

}

