const express = require("express");
const userRoutes = require("./routes/User");
// const thoughtRoutes = require("./routes/thought");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
// app.use("/api/thoughts", thoughtRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(
    "mongodb+srv://joshuaA:abcd1234@cluster0.bnsumjl.mongodb.net/The-Game-Room?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => console.log("server running"));
  });
