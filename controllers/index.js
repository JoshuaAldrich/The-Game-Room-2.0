const router = require("express").Router();
const loginroutes = require('./loginroutes');
const apiRoutes = require("./apiRoutes");
const homepage = require("./homepage.js");

router.use("/", homepage);
router.use("/api", apiRoutes);
router.use('/login', loginroutes);

module.exports = router;
