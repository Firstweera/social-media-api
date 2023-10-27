import * as t from "io-ts";

export const likeCodec = t.type({
  postId: t.number,
});

export interface ILike extends t.TypeOf<typeof likeCodec> {}
