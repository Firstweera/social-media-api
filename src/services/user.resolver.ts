import { PrismaClient } from "../../prisma/client";
import { IEditUser, IFollow, ILogin, IProfile, IRegister } from "../interfaces";
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

    return {
      status: "ok",
    };
  } catch (e) {
    console.error(e);
    throw new Error("Register failed");
  }
};

export const login = async (args: ILogin) => {
  try {
    if (!args.email || !args.password) {
      throw new Error("Email and password are required.");
    }

    const [user] = await prisma.user.findMany({
      where: {
        email: args.email,
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    const isLogin = await bcrypt.compare(args.password, user.password);

    if (isLogin) {
      const { email, fname, lname, id } = user;

      const token = jwt.sign(
        { email, firstName: fname, lastName: lname, userId: id },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );

      return token;
    } else {
      throw new Error("Password is incorrect.");
    }
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};

export const authentication = async (authHeader: string) => {
  try {
    const token = authHeader?.split(" ")[1];
    console.log("token", token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    return decoded;
  } catch (e) {
    console.error(e);
    throw new Error("Authentication failed");
  }
};

export const profile = async (args: IProfile) => {
  try {
    const profile = await prisma.user.findUnique({
      where: {
        id: args?.userId,
      },
    });

    if (!profile) {
      throw new Error("User not found.");
    }

    return {
      id: profile.id,
      fname: profile.fname,
      lname: profile.lname,
    };
  } catch (e) {
    console.error(e);
    throw new Error("GET Profile failed");
  }
};

export const editProfile = async (args: IEditUser) => {
  try {
    const edit = await prisma.user.update({
      where: { id: args?.userId },
      data: {
        fname: args?.fname ?? undefined,
        lname: args?.lname ?? undefined,
      },
    });

    if (!edit) {
      throw new Error("User not found.");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Edit Profile failed");
  }
};

export const follows = async (args: IFollow) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: args?.friendId },
      data: { follows: { connect: { id: args?.userId } } },
    });

    if (!updatedUser) {
      throw new Error("User not found or unable to follow.");
    }

    return updatedUser;
  } catch (e: any) {
    console.error(e);
    throw new Error("Follow failed: " + e.message);
  }
};

export const unFollows = async (args: IFollow) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: args?.friendId },
      data: { follows: { disconnect: { id: args?.userId } } },
    });

    if (!updatedUser) {
      throw new Error("User not found or unable to follow.");
    }

    return updatedUser;
  } catch (e: any) {
    console.error(e);
    throw new Error("Follow failed: " + e.message);
  }
};
