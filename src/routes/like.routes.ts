import { likeHandler, unLikeHandler } from "../controllers";

export const ProtectedLikeRoutes = [
  {
    path: "/like/likePost",
    method: "post",
    action: likeHandler,
  },
  {
    path: "/like/unLikePost",
    method: "post",
    action: unLikeHandler,
  },
];
