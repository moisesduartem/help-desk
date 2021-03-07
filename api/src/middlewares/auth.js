`use strict`;

import { verify } from 'jsonwebtoken';
import { roles } from '../enum/roles';
import User from '../models/user';
import jwtConfig from './../config/jwt';

export async function checkCredentials(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'É necessário fornecer um token de autenticação.' });
    }

    const [, token] = authHeader.split(' ');

    const { secret } = jwtConfig;

    try {
        const decoded = await verify(token, secret);
        const id = decoded.sub;
        req.userId = id;

        return next();
    } catch (err) {
        return res.status(401).json({ message: 'JSON Web Token inválido.' });
    }
};

export async function unauthorizeCostumers(req, res, next) {
    const user = await User.findById(req.userId);

    if (user.role === roles.COSTUMER) {
        return res.status(401).json({ message: 'Apenas funcionários podem acessar essa rota.' });
    }

    return next();
}