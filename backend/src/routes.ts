import { Router } from "express"
import multer from "multer"

import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"

import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { ListCategoryController } from "./controllers/category/ListCategoryController"

import { CreateProductController } from "./controllers/product/CreateProductController"
import { ListByCategoryController } from "./controllers/product/ListByCategoryController"

import { CreateOrderController } from "./controllers/order/CreateOrderController"
import { RemoveOrderController } from "./controllers/order/RemoveOrderController"
import { SendOrderController } from "./controllers/order/SendOrderController"
import { ListOrdersController } from "./controllers/order/ListOrdersController"
import { AddItemController } from "./controllers/order/AddItemController"
import { RemoveItemController } from "./controllers/order/RemoveItemController"
import { DetailOrderController } from "./controllers/order/DetailOrderController"
import { FinishOrderController } from "./controllers/order/FinishOrderController"

import { isAuthenticated } from "./middlewares/isAuthenticated"

import { multerConfig } from "./config/multerConfig"

const router = Router()
const upload = multer(multerConfig("./temp"))

// Global middleware
router.all("/api/*", isAuthenticated)

// User
router.post("/user", CreateUserController)
router.post("/auth", AuthUserController)
router.get("/api/userinfo", DetailUserController)

// Category
router.post("/api/category", CreateCategoryController)
router.get("/api/category", ListCategoryController)

// Product
router.post("/api/product", upload.single("file"), CreateProductController)
router.get("/api/category/product", ListByCategoryController)

// Order
router.post("/api/order", CreateOrderController)
router.delete("/api/order", RemoveOrderController)
router.put("/api/order/send", SendOrderController)
router.get("/api/orders", ListOrdersController)
router.post("/api/order/item", AddItemController)
router.delete("/api/order/item", RemoveItemController)
router.get("/api/order", DetailOrderController)
router.put("/api/order/finish", FinishOrderController)

export { router }