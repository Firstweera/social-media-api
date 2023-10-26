import { throwError } from "fp-ts/lib/Option";
import { PrismaClient } from "../../prisma/client";
import { ILogin, IRegister } from "../interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const prisma = new PrismaClient();

export const register = async (args: IRegister) => {
  try {
    const hashPassword = await bcrypt.hash(
      args.password,
      Number(process.env.SALT_ROUNDS)
    );

    await prisma.user.create({
      data: {
        email: args?.email,
        password: hashPassword,
        fname: args?.fname,
        lname: args?.lname,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("Register failed");
  }
};

export const login = async (args: ILogin) => {
  try {
    console.log("test login", args);

    const findUser = await prisma.user.findMany({
      where: {
        email: args?.email,
      },
    });

    if (findUser?.length === 0) {
      throw new Error("User not found");
    }

    const isLogin = await bcrypt.compare(args?.password, findUser[0]?.password);

    console.log("isLogin", isLogin);
    console.log("findUser", findUser);

    if (isLogin) {
      const token = jwt.sign(
        {
          email: findUser[0]?.email,
          firstname: findUser[0]?.fname,
          userId: findUser[0]?.id,
        },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );

      return token;
    } else {
      console.log("Password !!!");

      throw new Error("Password !!!");
    }
  } catch (e) {
    console.error(e);
    throw new Error(`Login error: ${e}`);
  }
};
