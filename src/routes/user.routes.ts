import {
  authenticationHandler,
  followHandler,
  loginHandler,
  profileHandler,
  registerHandler,
  unFollowHandler,
  updateProfileHandler,
} from "../controllers";

export const AppRoutes = [
  {
    path: "/register",
    method: "post",
    action: registerHandler,
  },
  {
    path: "/login",
    method: "post",
    action: loginHandler,
  },
  {
    path: "/authentication",
    method: "post",
    action: authenticationHandler,
  },
];

export const ProtectedUserRoutes = [
  {
    path: "/user/follow",
    method: "post",
    action: followHandler,
  },
  {
    path: "/user/unFollow",
    method: "post",
    action: unFollowHandler,
  },
  {
    path: "/user/profile",
    method: "post",
    action: profileHandler,
  },
  {
    path: "/user/updateProfile",
    method: "post",
    action: updateProfileHandler,
  },
];
