import mongoose from "mongoose";

interface Options { 
    mongoUrl: string
    dbName: string
}

export class MongoDataBase { 
    
    /**
     * Connect to mongo database
     * @param {options} Options 
     */

    static async connect(options: Options) { 
        const { mongoUrl, dbName } = options;
        try {
            await mongoose.connect(mongoUrl,
                {
                    dbName: dbName 
                });
            return true;
        } catch (error) {
            throw error
        }
    }
}

