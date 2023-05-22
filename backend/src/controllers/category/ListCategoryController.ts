import { Request, Response } from "express"
import { ListCategoryService } from "../../services/category/ListCategoryService"

export const ListCategoryController = async (request: Request, response: Response) => response.json(await ListCategoryService())