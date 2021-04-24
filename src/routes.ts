import { Router } from 'express';
import { SettingsRepository } from './repositories/SettingsRepository';
import { getCustomRepository } from 'typeorm';

const routes = Router();

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return response.json(settings);
});

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
