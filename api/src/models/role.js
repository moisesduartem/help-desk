import { Schema, model } from 'mongoose';

const RoleSchema = new Schema({
    description: {
        type: String,
        required: [true, 'É necessário informar a descrição da função.'],
    },
}, {
    timestamps: false
});

export default model('Role', RoleSchema);