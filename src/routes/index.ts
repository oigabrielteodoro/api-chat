import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import { SettingsRepositories } from '../repositories/SettingsRepository';

const routes = Router();

routes.post('/settings', async (request, response) => {
  const { body } = request;

  const settingsRepository = getCustomRepository(SettingsRepositories);

  const settings = settingsRepository.create(body);

  await settingsRepository.save(settings);

  return response.json(settings);
})

export { routes };