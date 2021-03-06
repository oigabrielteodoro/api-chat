import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create(body);

      return response.json(settings);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async findByUsername(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    await settingsService.update(username, chat);

    return response.status(200).send();
  }
}

export { SettingsController };