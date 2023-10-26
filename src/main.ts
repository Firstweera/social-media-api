import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./routes";


const app: Application = express();

app.use(cors());
app.use(express.json());

UserRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, route.action);
});

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});

module.exports = app;
