import { getRepository, Repository } from "typeorm";

import { Specification } from "../entities/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const list = await this.repository.find();

    return list;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationRepository };
