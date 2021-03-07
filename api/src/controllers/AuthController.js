import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtConfig from './../config/jwt';

class AuthController {
    async login(req, res) {

        const { email, password } = req.body;
        
        let user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({ message: 'Email e/ou senha inválidos.' });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ message: 'Email e/ou senha inválidos.' });
        }

        const { secret, expiresIn } = jwtConfig;

        const token = jwt.sign({}, secret, {
            subject: String(user._id),
            expiresIn
        });

        user = await User.findById(user._id);

        return res.json({ user, token, expiresIn });
    }
}

export default new AuthController();