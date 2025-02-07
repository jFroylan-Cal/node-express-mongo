import { compareSync, genSaltSync, hashSync } from "bcryptjs";

/**
 * Bcrypt Adapter   
 */ 
export class BcryptAdapter { 

    /**
     * Hash Password
     * @param {string} password
     * @returns {string}
     */
    static hashPassword(password: string) {
        const salt = genSaltSync();
        return hashSync(password, salt);
    }

    /**
     * Compare Password
     * @param {string} password
     * @param {string} hashed
     * @returns {boolean}
     */
    static comparePassword(password: string, hashed: string) {
        return compareSync(password, hashed);
    }
    
}


