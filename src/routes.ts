import { Router } from 'express';

import { SettingsController } from 'controllers/SettingsController';
import { UsersController } from 'controllers/UsersController';
import { MessagesController } from 'controllers/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

// Settings Routes
routes.post('/settings', settingsController.create);

// Users Routes
routes.post('/users', usersController.create);

// Messages Routes
routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };

/*
 * Type params
 * Route Params: params of the routes
 * exemplo: http://localhost/settings/1
 *
 * Query params: Filter and search
 * exemplo: http://localhost/settings/1?search=anythings
 *
 * Body oarams:
 * exemplo: request.body
 */
