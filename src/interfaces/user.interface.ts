import * as t from "io-ts";
import { optional } from "io-ts-extra";

import { Request } from "express";

export const registerCodec = t.type({
  email: t.string,
  password: t.string,
  fname: t.string,
  lname: t.string,
});

export interface IRegister extends t.TypeOf<typeof registerCodec> {}

export const loginCodec = t.type({
  email: t.string,
  password: t.string,
});

export interface ILogin extends t.TypeOf<typeof loginCodec> {}

export const profileCodec = t.type({
  userId: t.number,
});

export interface IProfile extends t.TypeOf<typeof profileCodec> {}

export const followCodec = t.type({
  friendId: t.number,
  userId: t.number,
});

export interface IFollow extends t.TypeOf<typeof followCodec> {}

export const editUserCodec = t.type({
  userId: t.number,
  fname: optional(t.string),
  lname: optional(t.string),
});

export interface IEditUser extends t.TypeOf<typeof editUserCodec> {}
