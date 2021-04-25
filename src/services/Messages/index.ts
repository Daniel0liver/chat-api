import { Message } from 'entities/Message';
import { MessagesRepository } from 'repositories/MessagesRepository';
import { getCustomRepository, Repository } from 'typeorm';

interface IMessagesCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messagesRepostory: Repository<Message>;

  constructor() {
    this.messagesRepostory = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, user_id, text }: IMessagesCreate) {
    const message = this.messagesRepostory.create({
      admin_id,
      text,
      user_id,
    });

    await this.messagesRepostory.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const list = await this.messagesRepostory.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}

export { MessagesService };
