import {
  authenticationHandler,
  editProfileHandler,
  followHandler,
  loginHandler,
  profileHandler,
  registerHandler,
} from "../controllers";

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
  {
    path: "/user/authentication",
    method: "post",
    action: authenticationHandler,
  },
  {
    path: "/user/follow",
    method: "post",
    action: followHandler,
  },
  {
    path: "/user/unFollow",
    method: "post",
    action: followHandler,
  },
  {
    path: "/user/profile",
    method: "post",
    action: profileHandler,
  },
  {
    path: "/user/editProfile",
    method: "post",
    action: editProfileHandler,
  },
];
