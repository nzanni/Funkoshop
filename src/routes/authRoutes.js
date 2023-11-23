const express = require ("express");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.get("/login", authControllers.login);
router.post("/login", authControllers.login);
router.get("/register", authControllers.register);
router.post("/register", authControllers.register);
router.get("/logout", authControllers.logout);

module.exports = router;