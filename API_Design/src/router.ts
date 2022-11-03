import { Router } from "express";
import { body, validationResult, oneOf } from "express-validator";
import {
  createProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import { handleInputsErrors } from "./modules/middleware";
const router = Router();

/**
 * Product
 */

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputsErrors,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  handleInputsErrors,
  createProduct
);
router.delete("/product/:id", () => {});

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("Status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  () => {}
);
router.delete("/update/:id", () => {});

router.get("/updatepoint", () => {});
router.get(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.put("/updatepoint/:id", () => {});
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateID").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
