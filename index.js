import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

try {
  await db.authenticate();
  console.log("Database Connected...");
  await Users.sync();
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://glistening-figolla-fe1bd2.netlify.app",
    ],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Server running at port  ${port}`);
});
