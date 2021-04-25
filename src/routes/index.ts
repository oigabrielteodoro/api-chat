import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { MessagesController } from '../controllers/MessagesController';
import { SettingsController } from '../controllers/SettingsController';

const routes = Router();

const usersController = new UsersController();
const messagesController = new MessagesController();
const settingsController = new SettingsController();

routes.post('/users', usersController.create);

routes.post('/settings', settingsController.create);

routes.post('/messages', messagesController.create);
routes.get('/messages/:user_id', messagesController.showByUser);

export { routes };