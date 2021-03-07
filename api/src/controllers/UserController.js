import User from '../models/user';
import Role from '../models/role';

class UserController {

    async index(req, res) {
        const users = await User.find().populate('role');
        return res.json({ users });
    }

    async roles(req, res) {
        const roles = Role.find();
        return res.json({ roles });
    }

    async logged(req, res) {
        const user = await User.findById(req.userId);
        return res.json({ user });
    }

    async store(req, res) {

        const { name, email, password, passwordConfirmation, role } = req.body;

        if (password !== passwordConfirmation) {
            return res.status(400).json({ message: 'As senhas não conferem.' });
        }

        try {
            const user = await User.create({ name, email, password, passwordConfirmation, role });
            return res.json({ user });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}

export default new UserController();