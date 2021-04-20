import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepositories } from "../repositories/SettingsRepository";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const settingsRepository = getCustomRepository(SettingsRepositories);

    const settings = settingsRepository.create(body);
  
    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };