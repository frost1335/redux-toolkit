const { Router } = require("express");
const {
  getAll,
  create,
  edit,
  deleteOne,
  getOne,
} = require("../controllers/product");
const router = Router();
const { uploadProductImages, resizerImages } = require("../utils/fileUpload");

router.route("/").get(getAll);
router.route("/").post(uploadProductImages, resizerImages, create);
router.route("/:id").get(getOne);
router.route("/:id").patch(uploadProductImages, resizerImages, edit);
router.route("/:id").delete(deleteOne);

module.exports = router;
