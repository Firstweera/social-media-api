import { PrismaClient } from "../../prisma/client";
import {
  ICreatePost,
  IDeletePost,
  IGetPostByUserIdCodec,
  IUpdatePost,
} from "../interfaces";

export const postPrisma = new PrismaClient();

export const createPost = async (args: ICreatePost, userId: number) => {
  try {
    const create = await postPrisma.post.create({
      data: {
        userId: userId,
        message: args?.message,
      },
    });

    return {
      message: create?.message,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Create Post failed");
  }
};

export const updatePost = async (args: IUpdatePost, userId: number) => {
  try {
    const existingPost = await postPrisma.post.findUnique({
      where: { id: args?.postId },
    });

    if (!existingPost || existingPost.userId !== userId) {
      throw new Error("Permission denied. You cannot edit this post.");
    }

    const update = await postPrisma.post.update({
      where: { id: args?.postId },
      data: {
        message: args?.message,
      },
    });

    return {
      message: update?.message,
    };
  } catch (e) {
    console.error(e);
    throw new Error("Edit Post failed");
  }
};

export const deletePost = async (args: IDeletePost, userId: number) => {
  // console.log("args: " + args?.postId, "userId: " + userId);

  try {
    // Check if the post exists and the user has permission to delete it
    const existingPost = await postPrisma.post.findUnique({
      where: { id: args?.postId },
    });

    // console.log("found post: " + existingPost);

    if (!existingPost || existingPost.userId !== userId) {
      // console.log("test", existingPost?.userId);
      throw new Error("Permission denied. You cannot delete this post.");
    }

    // Delete related records in the LikePost table first
    await postPrisma.likePost.deleteMany({
      where: { postId: args?.postId },
    });

    // Delete related records in the CommentPost table first
    await postPrisma.commentPost.deleteMany({
      where: { postId: args?.postId },
    });

    // Now, you can safely delete the post
    const deletedPost = await postPrisma.post.delete({
      where: { id: args?.postId },
    });

    return {
      message: "This Post has been deleted!.",
    };
  } catch (e: any) {
    console.error(e);
    throw new Error("Delete Post failed");
  }
};

export const getAllPosts = async () => {
  try {
    const allPosts = await postPrisma.post.findMany({
      select: {
        id: true,
        message: true,
        updatedAt: true,
        userId: true,
        user: {
          select: {
            fname: true,
            lname: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
        commentPosts: {
          select: {
            message: true,
            commentTo: true,
            postId: true,
            updatedAt: true,
            user: {
              select: {
                fname: true,
                lname: true,
              },
            },
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const groupedPosts: { [key: number]: any } = {};

    allPosts.forEach((post) => {
      const postId = post.id;
      if (!groupedPosts[postId]) {
        groupedPosts[postId] = { ...post, likes: [], commentPosts: [] };
      }
      groupedPosts[postId].likes.push(...post.likes);
      groupedPosts[postId].commentPosts.push(...post.commentPosts);
    });

    return Object.values(groupedPosts);
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch all posts.");
  }
};

export const getAllPostsFollowing = async (userId: number) => {
  try {
    const followingUsers = await postPrisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        follows: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!followingUsers) {
      throw new Error("User not found or is not following anyone.");
    }

    const followingUserIds = followingUsers.follows.map(
      (user: { id: number }) => user.id
    );

    const allPosts = await postPrisma.post.findMany({
      where: {
        userId: {
          in: followingUserIds,
        },
      },
      include: {
        user: {
          select: {
            fname: true,
            lname: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
        commentPosts: {
          include: {
            user: {
              select: {
                fname: true,
                lname: true,
              },
            },
            commentTo: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return allPosts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch posts from specific followers.");
  }
};

export const getPostByUser = async (userId: number) => {
  try {
    const userPosts = await postPrisma.post.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            fname: true,
            lname: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
        commentPosts: {
          select: {
            message: true,
            commentTo: true,
            postId: true,
            updatedAt: true,
            user: {
              select: {
                fname: true,
                lname: true,
              },
            },
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return userPosts;
  } catch (e) {
    console.error(e);
    throw new Error("GET Posts failed");
  }
};

export const getPostByUserId = async (args: IGetPostByUserIdCodec) => {
  try {
    const userPosts = await postPrisma.post.findMany({
      where: {
        userId: args?.userId,
      },
      include: {
        user: {
          select: {
            fname: true,
            lname: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
        commentPosts: {
          select: {
            message: true,
            commentTo: true,
            postId: true,
            updatedAt: true,
            user: {
              select: {
                fname: true,
                lname: true,
              },
            },
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return userPosts;
  } catch (e) {
    console.error(e);
    throw new Error("GET Posts failed");
  }
};
