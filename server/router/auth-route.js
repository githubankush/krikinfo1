const express  = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');

router.route("/").get( controller.home);
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/logout").post(controller.logout);

module.exports = router;
