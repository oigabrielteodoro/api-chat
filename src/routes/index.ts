import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { SettingsController } from '../controllers/SettingsController';

const routes = Router();

const usersController = new UsersController();
const settingsController = new SettingsController();

routes.post('/users', usersController.create);
routes.post('/settings', settingsController.create);

export { routes };