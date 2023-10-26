import { Request, Response } from "express";
import {
  profileCodec,
  followCodec,
  loginCodec,
  registerCodec,
  editUserCodec,
} from "../interfaces";
import {
  authentication,
  editProfile,
  follows,
  login,
  profile,
  register,
} from "../services";

export const registerHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (registerCodec.decode(args)._tag === "Right") {
    try {
      const result = await register(args);
      res.status(200).json({ status: "ok" });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (loginCodec.decode(args)._tag === "Right") {
    try {
      const result = await login(args);
      res.status(200).json({ status: "ok", token: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const authenticationHandler = async (req: Request, res: Response) => {
  const authHeader = req?.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const result = await authentication(authHeader);
      res.status(200).json({ status: "ok", result: result });
    } catch (e) {
      res.status(401).json({ error: String(e) });
    }
  } else {
    res.status(401).json({ error: "Invalid or missing Authorization header" });
  }
};

export const profileHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (profileCodec.decode(args)._tag === "Right") {
    try {
      const result = await profile(args);
      res.status(200).json({ status: "ok", data: result });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const editProfileHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (editUserCodec.decode(args)._tag === "Right") {
    try {
      const result = await editProfile(args);
      res.status(200).json({ status: "ok" });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const followHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (followCodec.decode(args)._tag === "Right") {
    try {
      const result = await follows(args);
      res.status(200).json({ status: "ok" });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const unFollowHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (followCodec.decode(args)._tag === "Right") {
    try {
      const result = await follows(args);
      res.status(200).json({ status: "ok" });
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
