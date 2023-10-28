import express, { Application } from "express";
import cors from "cors";
import {
  ProtectedLikeRoutes,
  ProtectedPostRoutes,
  ProtectedUserRoutes,
  AppRoutes,
  ProtectedCommentRoutes,
} from "./routes";
import { authToken } from "./middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, route.action);
});

ProtectedUserRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, authToken, route.action);
});

ProtectedPostRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, authToken, route.action);
});

ProtectedLikeRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, authToken, route.action);
});

ProtectedCommentRoutes.forEach((route) => {
  app[route.method as keyof Application](route.path, authToken, route.action);
});

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});

module.exports = app;
