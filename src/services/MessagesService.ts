import { getCustomRepository, Repository } from "typeorm";

import { Message } from "../entities/Message";

import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async listByUser(user_id: string): Promise<Message[]> {
    const messages = await this.messagesRepository.find({
      where: { user_id },
      relations: ['user']
    });

    return messages;
  }

  async create({ admin_id, text, user_id }: IMessagesCreate): Promise<Message> {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messagesRepository.save(message);

    return message;
  }
}

export { MessagesService };