import express, { Application } from "express";
import { AppRoutes } from "./routes";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, route.action);
});

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});

module.exports = app;
