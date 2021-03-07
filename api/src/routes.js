import { Router } from 'express';
import { checkCredentials, unauthorizeCostumers } from './middlewares/auth';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import SeedController from './controllers/SeedController';
import CategoriesController from './controllers/CategoriesController';
import ServiceCallsController from './controllers/ServiceCallsController';
import ServiceStatusController from './controllers/ServiceStatusController';

const routes = new Router();

routes.post('/login', AuthController.login);
routes.get('/users/logged', checkCredentials, UserController.logged);
routes.get('/users/roles', checkCredentials, UserController.roles);
routes.get('/users', checkCredentials, unauthorizeCostumers, UserController.index);
routes.post('/users/register', checkCredentials, unauthorizeCostumers, UserController.store);

routes.get('/serviceCalls/categories', checkCredentials, CategoriesController.index);
routes.get('/serviceCalls/status', checkCredentials, ServiceStatusController.index);

routes.get('/serviceCalls', checkCredentials, ServiceCallsController.index);
routes.post('/serviceCalls', checkCredentials, ServiceCallsController.store);
routes.put('/serviceCalls/:id', checkCredentials, unauthorizeCostumers, ServiceCallsController.update);

routes.post('/seed', SeedController.run);

export default routes;