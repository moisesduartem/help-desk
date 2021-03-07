import { Router } from 'express';
import { checkCredentials, unauthorizeCostumers } from './middlewares/auth';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import SeedController from './controllers/SeedController';

const routes = new Router();

routes.post('/login', AuthController.login);
routes.get('/users/logged', checkCredentials, UserController.logged);
routes.get('/users/roles', checkCredentials, UserController.roles);
routes.get('/users', checkCredentials, unauthorizeCostumers, UserController.index);
routes.post('/users/register', checkCredentials, unauthorizeCostumers, UserController.store);

routes.post('/seed', SeedController.run);

export default routes;