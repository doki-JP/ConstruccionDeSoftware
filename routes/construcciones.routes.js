const express = require("express");
const router = express.Router();
const construccionesController = require("../controllers/construcciones.controller");
const isAuth = require('../util/is-auth');

router.get("/construir",isAuth, construccionesController.get_construir);
router.post("/construir", isAuth,construccionesController.post_construir);
router.get("/materiales", isAuth,construccionesController.get_materiales);
router.get("/:construccion_id",isAuth, construccionesController.get_root);
router.get("/", isAuth, construccionesController.get_root);


module.exports = router;
