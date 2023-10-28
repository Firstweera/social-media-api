import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const commentPostCodec = t.type({
  postId: t.number,
  message: t.string,
});

export interface ICommentPost extends t.TypeOf<typeof commentPostCodec> {}

export const updateCommentCodec = t.type({
  commentId: t.number,
  message: t.string,
});

export interface IUpdateComment extends t.TypeOf<typeof updateCommentCodec> {}

export const deleteCommentCodec = t.type({
  commentId: t.number,
});

export interface IDeleteComment extends t.TypeOf<typeof deleteCommentCodec> {}
