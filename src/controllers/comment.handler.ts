import { Request, Response } from "express";
import {
  CustomRequest,
  commentPostCodec,
  deleteCommentCodec,
  updateCommentCodec,
} from "../interfaces";
import { commentPost, deleteComment, updateComment } from "../services";

export const commentPostHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (commentPostCodec.decode(args)._tag === "Right") {
    try {
      const result = await commentPost(args, userId);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateCommentHandler = async (
  req: CustomRequest,
  res: Response
) => {
  const args = req?.body;
  const userId = req?.userId;

  if (updateCommentCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateComment(args, userId);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const deleteCommentHandler = async (
  req: CustomRequest,
  res: Response
) => {
  const args = req?.body;
  const userId = req?.userId;

  if (deleteCommentCodec.decode(args)._tag === "Right") {
    try {
      const result = await deleteComment(args, userId);
      res.status(200).json({ status: "ok", result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
