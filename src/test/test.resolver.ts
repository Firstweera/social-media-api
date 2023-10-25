import { PrismaClient } from "../../prisma/client";
import { IRegister } from "./test.interface";
import bcrypt from "bcrypt";

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
