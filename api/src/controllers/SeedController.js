import Role from '../models/role';
import ServiceStatus from '../models/serviceStatus';
import User from '../models/user';
import Category from '../models/category';

class SeedController {

    async run(req, res) {

        try {

            for (let description of ['Cliente', 'Técnico', 'Líder Técnico', 'Analista de Sistemas', 'Analista de Redes']) {
                await Role.create({ description });
            }

            for (let description of ['Na Fila', 'Em Andamento', 'Resolvida']) {
                await ServiceStatus.create({ description });
            }
            
            const TECHNICIAN = await Role.findOne({ description: 'Técnico' });
            
            await User.create({
                name: 'Moisés Mariano',
                email: 'moises@gmail.com',
                isCostumer: false,
                role: TECHNICIAN,
                password: '123456'
            });

            await User.create({
                name: 'Emanuel Duarte',
                email: 'noel@gmail.com',
                password: '123456'
            });
            
            for (let description of ['PC', 'Notebook', 'Impressora', 'Rede', 'Software']) {
                await Category.create({ description });
            }

        } catch (err) {
            return res.status(500).send(err);
        }

        const users = await User.find().populate('role');
        const categories = await Category.find();
        const roles = await Role.find();
        const serviceStatuses = await ServiceStatus.find();

        return res.json({ users, roles, categories, serviceStatuses });
    }
}

export default new SeedController();