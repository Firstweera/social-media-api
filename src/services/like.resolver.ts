import { PrismaClient } from "../../prisma/client";
import { ILike } from "../interfaces";

export const likePrisma = new PrismaClient();

export const likePost = async (args: ILike, userId: number) => {
  try {
    const existingLike = await likePrisma.likePost.findFirst({
      where: {
        postId: args?.postId,
        userId: userId,
      },
    });

    if (existingLike) {
      throw new Error("User has already liked the post.");
    }

    const newLike = await likePrisma.likePost.create({
      data: {
        userId: userId,
        postId: args?.postId,
      },
    });

    return {
      message: "Like Post !",
    };
  } catch (e) {
    console.error(e);
    throw new Error("Like Post failed");
  }
};

export const unlikePost = async (args: ILike, userId: number) => {
  try {
    const existingLike = await likePrisma.likePost.findFirst({
      where: {
        postId: args?.postId,
        userId: userId,
      },
    });

    if (!existingLike) {
      throw new Error("User has not liked the post.");
    }

    await likePrisma.likePost.delete({
      where: {
        id: existingLike.id,
      },
    });

    return {
      message: "Post unLiked successfully",
    };
  } catch (e) {
    console.error(e);
    throw new Error("Unlike Post failed");
  }
};
