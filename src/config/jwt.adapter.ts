
import jwt, { SignOptions} from "jsonwebtoken";
import { envs } from "./envs";


const JWT_SEED = envs.JWT_SEED;

    export class JwtAdapter {
        
        /**
         * Generate Token
         * @param {payload} any
         * @param {duration} string
         * @returns {string}
         */
        static async generateToken(payload: any, duration: string = '2h') {
            return new Promise((resolve) => { 
                jwt.sign(payload, JWT_SEED, { expiresIn: duration } as SignOptions, (err, token) => {
                    
                    if (err) return resolve(null);

                    resolve(token);
                });
            });;
        }

        /**
         * Validate Token
         * @param {token} string
         * @returns {boolean}
         *  
         */
        static validateToken(token: string) {
            return true;
        }

    }

