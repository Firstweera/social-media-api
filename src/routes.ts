import { registerHandler } from "./test/test.handler";

export const AppRoutes = [
  {
    path: "/register",
    method: "post",
    action: registerHandler,
  },
];
