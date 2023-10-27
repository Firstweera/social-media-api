import { PrismaClient } from "../../prisma/client";

export const postPrisma = new PrismaClient();


export const createPost = async (args: any) => {
  try {
    return {
      status: "ok",
    };
  } catch (e) {
    console.error(e);
    throw new Error("Create Post failed");
  }
};
