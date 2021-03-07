import { roles } from '../enum/roles';
import User from '../models/user';

class SeedController {

    async run(req, res) {

        try {

            await User.create({
                name: 'Moisés Mariano',
                email: "moises@gmail.com",
                role: roles.TECHNICIAN,
                password: 'admin'
            });

        } catch (err) {
            return res.status(500).send(err);
        }

        const users = await User.find();

        return res.json({ users });
    }
}

export default new SeedController();