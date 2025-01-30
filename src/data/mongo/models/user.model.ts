import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String, 
        requierd: [true, 'Email is requiered'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    img: {
        type : String,
    },
    role: {
        type: [String],
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
});


export const UserModel = mongoose.model('User', userSchema);

