import { Request, Response } from "express";
import { loginCodec, registerCodec } from "../interfaces";
import { login, register } from "../services";


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