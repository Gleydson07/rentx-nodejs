import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
  const specificationRepository = new SpecificationRepository();
  const createCategoryUseCase = new CreateSpecificationUseCase(
    specificationRepository
  );

  const createSpecificationController = new CreateSpecificationController(
    createCategoryUseCase
  );

  return createSpecificationController;
};
