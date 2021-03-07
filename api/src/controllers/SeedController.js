import User from '../schema';

class SeedController {

    async run(req, res) {

        try {

            await User.create({ name: 'Moisés Mariano', email: "moises@gmail.com", password: 'admin' });

        } catch (err) {
            return res.status(500).send(err);
        }

        const users = await User.find();

        return res.json({ users });
    }
}

export default new SeedController();