import { PrismaClient } from "../../prisma/client";
import { ICommentPost, IDeleteComment, IUpdateComment } from "../interfaces";

export const commentPrisma = new PrismaClient();

export const commentPost = async (args: ICommentPost, userId: number) => {
  try {
    const newComment = await commentPrisma.commentPost.create({
      data: {
        post: { connect: { id: args?.postId } },
        user: { connect: { id: userId } },
        message: args?.message,
      },
    });

    return newComment;
  } catch (e) {
    console.error(e);
    throw new Error("Comment Post failed");
  }
};

export const updateComment = async (args: IUpdateComment, userId: number) => {
  try {
    const existingComment = await commentPrisma.commentPost.findFirst({
      where: {
        id: args?.commentId,
        userId: userId,
      },
    });

    if (!existingComment) {
      throw new Error(
        "Comment not found or user does not have permission to edit."
      );
    }

    const updatedComment = await commentPrisma.commentPost.update({
      where: {
        id: args?.commentId,
      },
      data: {
        message: args?.message,
      },
    });

    return updatedComment;
  } catch (e) {
    console.error(e);
    throw new Error("Update Comment Post failed");
  }
};

export const deleteComment = async (
  args: IDeleteComment,
  userId: number
) => {
  try {
    const existingComment = await commentPrisma.commentPost.findFirst({
      where: {
        id: args?.commentId,
        userId: userId,
      },
    });

    if (!existingComment) {
      throw new Error(
        "Comment not found or user does not have permission to delete."
      );
    }

    await commentPrisma.commentPost.delete({
      where: {
        id: args?.commentId,
      },
    });

    return { message: "Comment deleted successfully" };
  } catch (e) {
    console.error(e);
    throw new Error("Delete Comment Post failed");
  }
};
