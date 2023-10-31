import {
  createPostHandler,
  deletePostHandler,
  getAllPostFollowingHandler,
  getAllPostHandler,
  getPostByUserHandler,
  updatePostHandler,
} from "../controllers";

export const ProtectedPostRoutes = [
  {
    path: "/post/create",
    method: "post",
    action: createPostHandler,
  },
  {
    path: "/post/update",
    method: "post",
    action: updatePostHandler,
  },
  {
    path: "/post/delete",
    method: "post",
    action: deletePostHandler,
  },
  {
    path: "/post/getAll",
    method: "get",
    action: getAllPostHandler,
  },
  {
    path: "/post/getByUser",
    method: "get",
    action: getPostByUserHandler,
  },
  {
    path: "/post/getPostFollowing",
    method: "get",
    action: getAllPostFollowingHandler,
  },
  {
    path: "/post/getByUserId",
    method: "get",
    action: getPostByUserHandler,
  },
];
