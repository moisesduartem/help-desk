import { COSTUMER, roles, TECHNICIAN } from '../enum/roles';
import User from '../models/user';
import Category from '../models/category';

class SeedController {

    async run(req, res) {

        try {

            await User.create({
                name: 'Moisés Mariano',
                email: 'moises@gmail.com',
                role: TECHNICIAN,
                password: '123456'
            });

            await User.create({
                name: 'Emanuel Duarte',
                email: 'noel@gmail.com',
                role: COSTUMER,
                password: '123456'
            });

            for (let description of ['PC', 'Notebook', 'Impressora', 'Rede', 'Software']) {
                await Category.create({ description });
            }

        } catch (err) {
            return res.status(500).send(err);
        }

        const users = await User.find();
        const categories = await Category.find();

        return res.json({ users, roles, categories });
    }
}

export default new SeedController();