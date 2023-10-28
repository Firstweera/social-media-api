import {
  commentPostHandler,
  deleteCommentHandler,
  updateCommentHandler,
} from "../controllers";

export const ProtectedCommentRoutes = [
  {
    path: "/comment/commentPost",
    method: "post",
    action: commentPostHandler,
  },
  {
    path: "/comment/updateComment",
    method: "post",
    action: updateCommentHandler,
  },
  {
    path: "/comment/deleteComment",
    method: "post",
    action: deleteCommentHandler,
  },
];
