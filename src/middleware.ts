import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { authentication } from "./services";
import { CustomRequest } from "./interfaces";

export const authToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req?.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const decodedUser = await authentication(authHeader);
      if (typeof decodedUser === "object" && "userId" in decodedUser) {
        req.userId = (decodedUser as JwtPayload)?.userId;
        next();
      } else {
        throw new Error("Invalid user data");
      }
    } catch (e) {
      res.status(401).json({ error: String(e) });
    }
  } else {
    res.status(401).json({ error: "Invalid or missing Authorization header" });
  }
};
