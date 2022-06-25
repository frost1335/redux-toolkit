const { Router } = require("express");
const { getAll, create, edit, deleteOne } = require("../controllers/product");
const router = Router();

router.route("/").get(getAll);
router.route("/").post(create);
router.route("/:id").put(edit);
router.route("/:id").delete(deleteOne);

module.exports = router;
