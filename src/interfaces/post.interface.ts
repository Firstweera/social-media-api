import * as t from "io-ts";

export const createPostCodec = t.type({
  message: t.string,
});

export interface ICreatePost extends t.TypeOf<typeof createPostCodec> {}

export const updatePostCodec = t.type({
  postId: t.number,
  message: t.string,
});

export interface IUpdatePost extends t.TypeOf<typeof updatePostCodec> {}

export const deletePostCodec = t.type({
  postId: t.number,
});

export interface IDeletePost extends t.TypeOf<typeof deletePostCodec> {}
