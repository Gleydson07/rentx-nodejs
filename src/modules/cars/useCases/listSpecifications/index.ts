import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export default (): ListSpecificationController => {
  const specificationRepository = new SpecificationRepository();
  const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository
  );

  const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
  );

  return listSpecificationController;
};
