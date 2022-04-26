import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export default (): ListCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

  const listCategoryController = new ListCategoryController(
    listCategoryUseCase
  );

  return listCategoryController;
};
