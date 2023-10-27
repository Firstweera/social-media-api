import { Request, Response } from "express";
import { likeCodec, CustomRequest } from "../interfaces";
import { likePost, unlikePost } from "../services";


export const likeHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (likeCodec.decode(args)._tag === "Right") {
    try {
      const result = await likePost(args, userId);
      res.status(200).json({ status: "ok", result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const unLikeHandler = async (req: CustomRequest, res: Response) => {
  const args = req?.body;
  const userId = req?.userId;

  if (likeCodec.decode(args)._tag === "Right") {
    try {
      const result = await unlikePost(args, userId);
      res.status(200).json({ status: "ok", result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
