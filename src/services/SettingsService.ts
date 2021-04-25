import { getCustomRepository, Repository } from "typeorm";

import { Setting } from "../entities/Setting";

import { SettingsRepositories } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  async create({ chat, username }: ISettingsCreate): Promise<Setting> {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });
  
    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };