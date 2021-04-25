import { MessagesRepository } from 'repositories/MessagesRepository';
import { getCustomRepository } from 'typeorm';

interface IMessagesCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, user_id, text }: IMessagesCreate) {
    const messagesRepostory = getCustomRepository(MessagesRepository);

    const message = messagesRepostory.create({
      admin_id,
      text,
      user_id,
    });

    await messagesRepostory.save(message);

    return message;
  }
}

export { MessagesService };
