import { getCustomRepository } from 'typeorm';
import { UsersRepository } from 'repositories/UsersRepository';

class UsersService {
  async create(email: string) {
    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = userRepository.create({
      email,
    });

    await userRepository.save(user);

    return user;
  }
}

export { UsersService };
