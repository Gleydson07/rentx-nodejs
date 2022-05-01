import { Router } from "express";

import { ensureAutheticated } from "../middlewares/ensureAutheticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

const specificationsRoutes = Router();

specificationsRoutes.post(
  "/",
  ensureAutheticated,
  createSpecificationController.handle
);

specificationsRoutes.get(
  "/",
  ensureAutheticated,
  listSpecificationController.handle
);

export { specificationsRoutes };
