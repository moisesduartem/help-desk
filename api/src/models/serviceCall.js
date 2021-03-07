import { Schema, model } from 'mongoose';

const ServiceCallSchema = new Schema({
    title: {
        type: String,
        required: [true, 'É necessário informar o título do chamado.'],
    },
    description: {
        type: String,
        required: [true, 'É necessário informar a descrição do chamado.'],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'É necessário informar a categoria do chamado.'],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'É necessário informar o autor do chamado.'],
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    deleted: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true
});

export default model('ServiceCall', ServiceCallSchema);