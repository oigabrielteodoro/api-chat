import { EntityRepository } from "typeorm";

import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesRepository {}

export { MessagesRepository };