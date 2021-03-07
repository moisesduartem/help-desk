import mongoose from 'mongoose';

class Database {
    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb://localhost:17017/help_desk', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

export default new Database();