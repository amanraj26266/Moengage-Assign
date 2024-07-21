const app = require("./app");
const connectDb = require("./config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "server/config/.env" });
connectDb();
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
