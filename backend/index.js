require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/Users.route");

const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the the brand wick project");
});
app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("SUCCESSFULL CONNECTED TO DB");
  } catch (error) {
    console.log("SOMTHING WENT WRONG");
    console.log(error);
  }
  console.log(`Listening on port ${process.env.port}`);
});
