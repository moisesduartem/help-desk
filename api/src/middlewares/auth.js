`use strict`;

import { verify } from 'jsonwebtoken';
import jwtConfig from './../config/jwt';

export async function checkCredentials(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return status(401).json({ message: 'É necessário fornecer um token de autenticação.' });
    }

    const [, token] = authHeader.split(' ');

    const { secret } = jwtConfig;

    try {
        const decoded = await verify(token, secret);
        return next();
    } catch (e) {
        return res.status(401).json({ message: 'JSON Web Token inválido.'});
    }
};