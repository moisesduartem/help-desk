import { Router } from 'express';
import { checkCredentials } from './middlewares/auth';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import SeedController from './controllers/SeedController';

const routes = new Router();

routes.get('/users', checkCredentials, UserController.index);
routes.post('/login', AuthController.store);
routes.post('/register', UserController.store);

routes.post('/seed', SeedController.run);

export default routes;