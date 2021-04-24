import { getCustomRepository } from "typeorm";

import { Setting } from "../entities/Setting";

import { SettingsRepositories } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate): Promise<Setting> {
    const settingsRepository = getCustomRepository(SettingsRepositories);

    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });
  
    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };