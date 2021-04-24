import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import { SettingsController } from 'controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };

/*
 * Type params
 * Route Params: params od the routes
 * exemplo: http://localhost/settings/1
 *
 * Query params: Filter and search
 * exemplo: http://localhost/settings/1?search=anythings
 *
 * Body oarams:
 * exemplo: request.body
 */
