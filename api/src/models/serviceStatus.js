import { Schema, model } from 'mongoose';

const ServiceStatusSchema = new Schema({
    description: {
        type: String,
        required: [true, 'É necessário informar a descrição do status do serviço.'],
    },
}, {
    timestamps: false
});

export default model('ServiceStatus', ServiceStatusSchema);