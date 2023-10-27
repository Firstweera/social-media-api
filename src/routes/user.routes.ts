import {
  authenticationHandler,
  editProfileHandler,
  followHandler,
  loginHandler,
  profileHandler,
  registerHandler,
  unFollowHandler,
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
    path: "/user/editProfile",
    method: "post",
    action: editProfileHandler,
  },
];
