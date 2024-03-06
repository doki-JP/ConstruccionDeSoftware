const express = require("express");
const router = express.Router();
const herramientasController = require("../controllers/herramientas.controller");

router.get("/armar", herramientasController.get_armar);
router.post("/armar", herramientasController.post_armar);

module.exports = router;
