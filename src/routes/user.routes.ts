import { loginHandler, registerHandler } from "../controllers";


export const UserRoutes = [
  {
    path: "/user/register",
    method: "post",
    action: registerHandler,
  },
  {
    path: "/user/login",
    method: "post",
    action: loginHandler,
  },
];
