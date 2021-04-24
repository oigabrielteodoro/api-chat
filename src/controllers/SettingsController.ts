import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepositories } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const settingsService = new SettingsService();

    const settings = await settingsService.create(body);

    return response.json(settings);
  }
}

export { SettingsController };