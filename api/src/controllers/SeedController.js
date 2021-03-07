import User from '../schema';
import { getErrorMessage } from '../functions';

class SeedController {

    async run(req, res) {

        try {
            await User.create({ name: 'Moisés Mariano', email: "moises@gmail.com", password: 'admin' });
        } catch (err) {

            let errors = err?.errors ?? [];
            return res.status(500).send({
                message: getErrorMessage(errors)
            });
        }

        const users = await User.find();

        return res.json({ users });
    }
}

export default new SeedController();