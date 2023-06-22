const router = require("express").Router();
const dishController = require("../controllers/dishController");
const auth = require("../")

router.get('/', dishController.getAllDishes);

module.exports = router;