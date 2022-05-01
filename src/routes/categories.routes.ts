import { Router } from "express";
import multer from "multer";

import { ensureAutheticated } from "../middlewares/ensureAutheticated";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategories/ListCategoryController";

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

const categoriesRoutes = Router();

const upload = multer({
  dest: "./temp",
});

categoriesRoutes.post("/", ensureAutheticated, createCategoryController.handle);
categoriesRoutes.get("/", ensureAutheticated, listCategoryController.handle);
categoriesRoutes.post(
  "/import",
  ensureAutheticated,
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
