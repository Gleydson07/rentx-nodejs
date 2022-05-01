import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(user: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
