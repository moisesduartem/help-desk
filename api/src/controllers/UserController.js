import User from '../models/user';

class UserController {

    async index(req, res) {
        const users = await User.find();
        return res.json({ users });
    }

    async logged(req, res) {
        const user = await User.findById(req.userId);
        return res.json({ user });
    }

    async store(req, res) {

        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });

        return res.json({ user: user.show() });
    }
}

export default new UserController();