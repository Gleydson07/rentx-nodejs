import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";
import User from "../entities/User";

interface IUsersRepository {
  create(user: ICreateUsersDTO): Promise<void>;
  findById(email: string): Promise<User>;
  findByEmail(id: string): Promise<User>;
}

export { IUsersRepository };
