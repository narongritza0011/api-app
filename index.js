import express from "express";
import router from "./routes/index.js";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Choo Choo! Welcome to your Express app 🚅");
// });

// app.get("/json", (req, res) => {
//   res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
// });

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
