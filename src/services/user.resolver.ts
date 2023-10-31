import { PrismaClient } from "../../prisma/client";
import {
  IFollow,
  ILogin,
  IProfile,
  IRegister,
  ISearchUser,
  IUpdateUser,
} from "../interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userPrisma = new PrismaClient();

export const register = async (args: IRegister) => {
  try {
    const hashPassword = await bcrypt.hash(
      args.password,
      Number(process.env.SALT_ROUNDS)
    );

    await userPrisma.user.create({
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

    const [user] = await userPrisma.user.findMany({
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
    // console.log("Authentication is enabled", process.env.JWT_SECRET_KEY);
    const token = authHeader?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    return decoded;
  } catch (e) {
    console.error(e);
    throw new Error("Authentication failed");
  }
};

export const profile = async (args: IProfile) => {
  try {
    const profile = await userPrisma.user.findUnique({
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

export const searchUser = async (args: ISearchUser) => {
  // console.log("searchInput", args);

  try {
    const users = await userPrisma.user.findMany({
      where: {
        OR: [
          {
            fname: {
              contains: args.searchInput,
              mode: "insensitive",
            },
          },
          {
            lname: {
              contains: args.searchInput,
              mode: "insensitive",
            },
          },
          {
            fname: {
              contains: args.searchInput.split(" ")[0],
              mode: "insensitive",
            },
            lname: {
              contains: args.searchInput.split(" ")[1],
              mode: "insensitive",
            },
          },
        ],
      },
    });

    if (users.length === 0) {
      throw new Error("User not found.");
    }

    return users.map((user: { id: number; fname: string; lname: string }) => ({
      id: user.id,
      fname: user.fname,
      lname: user.lname,
    }));
  } catch (e) {
    console.error(e);
    throw new Error("Search User failed");
  }
};

export const updateProfile = async (args: IUpdateUser, userId: number) => {
  try {
    const update = await userPrisma.user.update({
      where: { id: userId },
      data: {
        fname: args?.fname ?? undefined,
        lname: args?.lname ?? undefined,
      },
    });

    if (!update) {
      throw new Error("User not found.");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Edit Profile failed");
  }
};

export const follows = async (args: IFollow, userId: number) => {
  try {
    const updatedUser = await userPrisma.user.update({
      where: { id: args?.friendId },
      data: { follows: { connect: { id: userId } } },
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

export const unFollows = async (args: IFollow, userId: number) => {
  try {
    const updatedUser = await userPrisma.user.update({
      where: { id: args?.friendId },
      data: { follows: { disconnect: { id: userId } } },
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

export const getFriends = async (userId: number) => {
  try {
    const friends = await userPrisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        toFollows: {
          where: {
            follows: {
              some: {
                id: userId,
              },
            },
          },
          select: {
            id: true,
            fname: true,
            lname: true,
          },
        },
        follows: {
          select: {
            id: true
          }
        }
      },
    });

    if (!friends) {
      throw new Error("User not found or has no friends.");
    }

    return friends.toFollows;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch friends who are mutual followers.");
  }
};
