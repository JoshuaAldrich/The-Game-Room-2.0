const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  id: {
    type: INTEGER,
    autoIncrement: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  //password length must be at least 6 char
  password: {
    type: String,
    required: true,
    validate: {
      len: [6],
    },
  },
  // hooks: {
  //   async beforeCreate(userData) {
  //     userData.password = await bcrypt.hash(userData.password, 10);

  //     return userData;
  //   },

  //   async beforeUpdate(updateUserData) {
  //     updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
  //     return updateUserData;
  //   },
  // },
});

module.exports = userSchema;
