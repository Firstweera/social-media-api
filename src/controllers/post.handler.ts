import { Request, Response } from "express";
import {
  createPostCodec,
  deletePostCodec,
  updatePostCodec,
  CustomRequest,
  getPostByUserIdCodec,
} from "../interfaces";
import {
  createPost,
  deletePost,
  getAllPosts,
  getAllPostsFollowing,
  getPostByUser,
  getPostByUserId,
  updatePost,
} from "../services";

export const createPostHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (createPostCodec.decode(args)._tag === "Right") {
    try {
      const result = await createPost(args, userId);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePostHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (updatePostCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePost(args, userId);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const deletePostHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (deletePostCodec.decode(args)._tag === "Right") {
    try {
      const result = await deletePost(args, userId);
      res.status(200).json({ status: "ok", result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getAllPostHandler = async (req: Request, res: Response) => {
  try {
    const result = await getAllPosts();
    res.status(200).json({ status: "ok", data: result });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getAllPostFollowingHandler = async (
  req: CustomRequest,
  res: Response
) => {
  const userId = req?.userId;

  try {
    const result = await getAllPostsFollowing(userId);
    res.status(200).json({ status: "ok", data: result });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getPostByUserHandler = async (
  req: CustomRequest,
  res: Response
) => {
  const userId = req?.userId;

  try {
    const result = await getPostByUser(userId);
    res.status(200).json({ status: "ok", data: result });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getPostByUseIdrHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (getPostByUserIdCodec.decode(args)._tag === "Right") {
    try {
      const result = await getPostByUserId(args);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
