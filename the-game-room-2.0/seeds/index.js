const seededUsers = require("./userSeeds");

const sequelize = require("../config/connection");

const seedData = async () => {
  await sequelize.sync({ force: true });
  await seededUsers();
  process.exit(0);
};

seedData();
