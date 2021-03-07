import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    description: {
        type: String,
        required: [true, 'É necessário informar a descrição da categoria.'],
    },
}, {
    timestamps: false
});

export default model('Category', CategorySchema);