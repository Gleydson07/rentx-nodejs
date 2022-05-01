import { getRepository, Repository } from "typeorm";

import { ICreateUsersDTO, IGetUserDTO } from "../../dtos/ICreateUserDTO";
import User from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<IGetUserDTO> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
