import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { roles } from '../enum/roles';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'É necessário informar um nome.'],
    },
    email: {
        type: String,
        required: [true, 'É necessário informar um e-mail.'],
        unique: [true, 'O email digitado já está em uso.'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'É necessário informar uma senha.'],
        select: false,
    },
    role: {
        type: String,
        required: false,
        default: 'Cliente',
        enum: roles,
    },
    deleted: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true
});

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 8);
});

export default model('User', UserSchema);