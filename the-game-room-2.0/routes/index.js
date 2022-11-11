const router = require("express").Router();
const apiRoutes = require("./apiRoute");
const homeRoutes = require("./homePageRoutes");
//now api routes use this
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
