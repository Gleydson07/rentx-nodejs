import { ICreateUsersDTO, IGetUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(user: ICreateUsersDTO): Promise<void>;
  findByEmail(email: string): Promise<IGetUserDTO>;
}

export { IUsersRepository };
