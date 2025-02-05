

/**
 * Custom Error
 */
export class CustomError extends Error {
    
    /**
     * Custom Error
     * @param {statusCode} number
     * @param {message} string
     */
    constructor(
        public readonly statusCode: number,
        public readonly message: string,
    ) {
        super(message);
    }

    /**
     * Bad Request Error
     * @param {message} string
     */
    static badRequest(message: string) { 
        return new CustomError(400, message);
    }

    /**
     * Unauthorized Error
     * @param {message} string
     */
    static unauthorized(message: string) { 
        return new CustomError(401, message);
    }

    /**
     * Forbidden Error
     * @param {message} string  
     */
    static forbidden(message: string) { 
        return new CustomError(403, message);
    }  
    
    /**
     * Not Found Error
     * @param {message} string  
     */
    static notFound(message: string) { 
        return new CustomError(404, message);
    }  
    
    /**
     * Internal Server Error
     * @param {message} string  
     */
    static internalServerError(message: string) { 
        return new CustomError(500, message);
    }

}

