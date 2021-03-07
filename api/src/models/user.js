import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

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
    isCostumer: {
        type: Boolean,
        default: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: false,
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