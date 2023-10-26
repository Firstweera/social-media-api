
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model LikePost
 * 
 */
export type LikePost = $Result.DefaultSelection<Prisma.$LikePostPayload>
/**
 * Model CommentPost
 * 
 */
export type CommentPost = $Result.DefaultSelection<Prisma.$CommentPostPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.likePost`: Exposes CRUD operations for the **LikePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikePosts
    * const likePosts = await prisma.likePost.findMany()
    * ```
    */
  get likePost(): Prisma.LikePostDelegate<ExtArgs>;

  /**
   * `prisma.commentPost`: Exposes CRUD operations for the **CommentPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentPosts
    * const commentPosts = await prisma.commentPost.findMany()
    * ```
    */
  get commentPost(): Prisma.CommentPostDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    LikePost: 'LikePost',
    CommentPost: 'CommentPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'post' | 'likePost' | 'commentPost'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      LikePost: {
        payload: Prisma.$LikePostPayload<ExtArgs>
        fields: Prisma.LikePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikePostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikePostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          findFirst: {
            args: Prisma.LikePostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikePostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          findMany: {
            args: Prisma.LikePostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>[]
          }
          create: {
            args: Prisma.LikePostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          createMany: {
            args: Prisma.LikePostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikePostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          update: {
            args: Prisma.LikePostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          deleteMany: {
            args: Prisma.LikePostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikePostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikePostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikePostPayload>
          }
          aggregate: {
            args: Prisma.LikePostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikePost>
          }
          groupBy: {
            args: Prisma.LikePostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikePostCountArgs<ExtArgs>,
            result: $Utils.Optional<LikePostCountAggregateOutputType> | number
          }
        }
      }
      CommentPost: {
        payload: Prisma.$CommentPostPayload<ExtArgs>
        fields: Prisma.CommentPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentPostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentPostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          findFirst: {
            args: Prisma.CommentPostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentPostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          findMany: {
            args: Prisma.CommentPostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>[]
          }
          create: {
            args: Prisma.CommentPostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          createMany: {
            args: Prisma.CommentPostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentPostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          update: {
            args: Prisma.CommentPostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          deleteMany: {
            args: Prisma.CommentPostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentPostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentPostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPostPayload>
          }
          aggregate: {
            args: Prisma.CommentPostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommentPost>
          }
          groupBy: {
            args: Prisma.CommentPostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentPostCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    follows: number
    tofollows: number
    posts: number
    likes: number
    commentPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follows?: boolean | UserCountOutputTypeCountFollowsArgs
    tofollows?: boolean | UserCountOutputTypeCountTofollowsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    commentPosts?: boolean | UserCountOutputTypeCountCommentPostsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTofollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikePostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPostWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    likes: number
    commentPosts: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    commentPosts?: boolean | PostCountOutputTypeCountCommentPostsArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikePostWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPostWhereInput
  }



  /**
   * Count Type CommentPostCountOutputType
   */

  export type CommentPostCountOutputType = {
    commentPosts: number
  }

  export type CommentPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentPosts?: boolean | CommentPostCountOutputTypeCountCommentPostsArgs
  }

  // Custom InputTypes

  /**
   * CommentPostCountOutputType without action
   */
  export type CommentPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPostCountOutputType
     */
    select?: CommentPostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommentPostCountOutputType without action
   */
  export type CommentPostCountOutputTypeCountCommentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fname: string | null
    lname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fname: string | null
    lname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fname: number
    lname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fname?: true
    lname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fname?: true
    lname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fname?: true
    lname?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fname?: boolean
    lname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    follows?: boolean | User$followsArgs<ExtArgs>
    tofollows?: boolean | User$tofollowsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    commentPosts?: boolean | User$commentPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fname?: boolean
    lname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follows?: boolean | User$followsArgs<ExtArgs>
    tofollows?: boolean | User$tofollowsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    commentPosts?: boolean | User$commentPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      follows: Prisma.$UserPayload<ExtArgs>[]
      tofollows: Prisma.$UserPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      likes: Prisma.$LikePostPayload<ExtArgs>[]
      commentPosts: Prisma.$CommentPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fname: string
      lname: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    follows<T extends User$followsArgs<ExtArgs> = {}>(args?: Subset<T, User$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    tofollows<T extends User$tofollowsArgs<ExtArgs> = {}>(args?: Subset<T, User$tofollowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findMany'> | Null>;

    commentPosts<T extends User$commentPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fname: FieldRef<"User", 'String'>
    readonly lname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.follows
   */
  export type User$followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.tofollows
   */
  export type User$tofollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    where?: LikePostWhereInput
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    cursor?: LikePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikePostScalarFieldEnum | LikePostScalarFieldEnum[]
  }


  /**
   * User.commentPosts
   */
  export type User$commentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    where?: CommentPostWhereInput
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    cursor?: CommentPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    userId: number
    message: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    commentPosts?: boolean | Post$commentPostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    commentPosts?: boolean | Post$commentPostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$LikePostPayload<ExtArgs>[]
      commentPosts: Prisma.$CommentPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findMany'> | Null>;

    commentPosts<T extends Post$commentPostsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly message: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    where?: LikePostWhereInput
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    cursor?: LikePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikePostScalarFieldEnum | LikePostScalarFieldEnum[]
  }


  /**
   * Post.commentPosts
   */
  export type Post$commentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    where?: CommentPostWhereInput
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    cursor?: CommentPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model LikePost
   */

  export type AggregateLikePost = {
    _count: LikePostCountAggregateOutputType | null
    _avg: LikePostAvgAggregateOutputType | null
    _sum: LikePostSumAggregateOutputType | null
    _min: LikePostMinAggregateOutputType | null
    _max: LikePostMaxAggregateOutputType | null
  }

  export type LikePostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type LikePostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type LikePostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikePostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikePostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikePostAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikePostSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikePostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikePostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikePostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikePost to aggregate.
     */
    where?: LikePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikePosts to fetch.
     */
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikePosts
    **/
    _count?: true | LikePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikePostMaxAggregateInputType
  }

  export type GetLikePostAggregateType<T extends LikePostAggregateArgs> = {
        [P in keyof T & keyof AggregateLikePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikePost[P]>
      : GetScalarType<T[P], AggregateLikePost[P]>
  }




  export type LikePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikePostWhereInput
    orderBy?: LikePostOrderByWithAggregationInput | LikePostOrderByWithAggregationInput[]
    by: LikePostScalarFieldEnum[] | LikePostScalarFieldEnum
    having?: LikePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikePostCountAggregateInputType | true
    _avg?: LikePostAvgAggregateInputType
    _sum?: LikePostSumAggregateInputType
    _min?: LikePostMinAggregateInputType
    _max?: LikePostMaxAggregateInputType
  }

  export type LikePostGroupByOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: Date
    updatedAt: Date
    _count: LikePostCountAggregateOutputType | null
    _avg: LikePostAvgAggregateOutputType | null
    _sum: LikePostSumAggregateOutputType | null
    _min: LikePostMinAggregateOutputType | null
    _max: LikePostMaxAggregateOutputType | null
  }

  type GetLikePostGroupByPayload<T extends LikePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikePostGroupByOutputType[P]>
            : GetScalarType<T[P], LikePostGroupByOutputType[P]>
        }
      >
    >


  export type LikePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likePost"]>

  export type LikePostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikePostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | PostDefaultArgs<ExtArgs>
  }


  export type $LikePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikePost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likePost"]>
    composites: {}
  }


  type LikePostGetPayload<S extends boolean | null | undefined | LikePostDefaultArgs> = $Result.GetResult<Prisma.$LikePostPayload, S>

  type LikePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikePostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LikePostCountAggregateInputType | true
    }

  export interface LikePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikePost'], meta: { name: 'LikePost' } }
    /**
     * Find zero or one LikePost that matches the filter.
     * @param {LikePostFindUniqueArgs} args - Arguments to find a LikePost
     * @example
     * // Get one LikePost
     * const likePost = await prisma.likePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikePostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostFindUniqueArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikePost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikePostFindUniqueOrThrowArgs} args - Arguments to find a LikePost
     * @example
     * // Get one LikePost
     * const likePost = await prisma.likePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikePostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostFindFirstArgs} args - Arguments to find a LikePost
     * @example
     * // Get one LikePost
     * const likePost = await prisma.likePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikePostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostFindFirstArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostFindFirstOrThrowArgs} args - Arguments to find a LikePost
     * @example
     * // Get one LikePost
     * const likePost = await prisma.likePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikePostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikePosts
     * const likePosts = await prisma.likePost.findMany()
     * 
     * // Get first 10 LikePosts
     * const likePosts = await prisma.likePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likePostWithIdOnly = await prisma.likePost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikePostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikePost.
     * @param {LikePostCreateArgs} args - Arguments to create a LikePost.
     * @example
     * // Create one LikePost
     * const LikePost = await prisma.likePost.create({
     *   data: {
     *     // ... data to create a LikePost
     *   }
     * })
     * 
    **/
    create<T extends LikePostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostCreateArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikePosts.
     *     @param {LikePostCreateManyArgs} args - Arguments to create many LikePosts.
     *     @example
     *     // Create many LikePosts
     *     const likePost = await prisma.likePost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikePostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikePost.
     * @param {LikePostDeleteArgs} args - Arguments to delete one LikePost.
     * @example
     * // Delete one LikePost
     * const LikePost = await prisma.likePost.delete({
     *   where: {
     *     // ... filter to delete one LikePost
     *   }
     * })
     * 
    **/
    delete<T extends LikePostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostDeleteArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikePost.
     * @param {LikePostUpdateArgs} args - Arguments to update one LikePost.
     * @example
     * // Update one LikePost
     * const likePost = await prisma.likePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikePostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostUpdateArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikePosts.
     * @param {LikePostDeleteManyArgs} args - Arguments to filter LikePosts to delete.
     * @example
     * // Delete a few LikePosts
     * const { count } = await prisma.likePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikePostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikePostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikePosts
     * const likePost = await prisma.likePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikePostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikePost.
     * @param {LikePostUpsertArgs} args - Arguments to update or create a LikePost.
     * @example
     * // Update or create a LikePost
     * const likePost = await prisma.likePost.upsert({
     *   create: {
     *     // ... data to create a LikePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikePost we want to update
     *   }
     * })
    **/
    upsert<T extends LikePostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikePostUpsertArgs<ExtArgs>>
    ): Prisma__LikePostClient<$Result.GetResult<Prisma.$LikePostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LikePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostCountArgs} args - Arguments to filter LikePosts to count.
     * @example
     * // Count the number of LikePosts
     * const count = await prisma.likePost.count({
     *   where: {
     *     // ... the filter for the LikePosts we want to count
     *   }
     * })
    **/
    count<T extends LikePostCountArgs>(
      args?: Subset<T, LikePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikePostAggregateArgs>(args: Subset<T, LikePostAggregateArgs>): Prisma.PrismaPromise<GetLikePostAggregateType<T>>

    /**
     * Group by LikePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikePostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikePostGroupByArgs['orderBy'] }
        : { orderBy?: LikePostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikePost model
   */
  readonly fields: LikePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    posts<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikePost model
   */ 
  interface LikePostFieldRefs {
    readonly id: FieldRef<"LikePost", 'Int'>
    readonly userId: FieldRef<"LikePost", 'Int'>
    readonly postId: FieldRef<"LikePost", 'Int'>
    readonly createdAt: FieldRef<"LikePost", 'DateTime'>
    readonly updatedAt: FieldRef<"LikePost", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LikePost findUnique
   */
  export type LikePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter, which LikePost to fetch.
     */
    where: LikePostWhereUniqueInput
  }


  /**
   * LikePost findUniqueOrThrow
   */
  export type LikePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter, which LikePost to fetch.
     */
    where: LikePostWhereUniqueInput
  }


  /**
   * LikePost findFirst
   */
  export type LikePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter, which LikePost to fetch.
     */
    where?: LikePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikePosts to fetch.
     */
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikePosts.
     */
    cursor?: LikePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikePosts.
     */
    distinct?: LikePostScalarFieldEnum | LikePostScalarFieldEnum[]
  }


  /**
   * LikePost findFirstOrThrow
   */
  export type LikePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter, which LikePost to fetch.
     */
    where?: LikePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikePosts to fetch.
     */
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikePosts.
     */
    cursor?: LikePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikePosts.
     */
    distinct?: LikePostScalarFieldEnum | LikePostScalarFieldEnum[]
  }


  /**
   * LikePost findMany
   */
  export type LikePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter, which LikePosts to fetch.
     */
    where?: LikePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikePosts to fetch.
     */
    orderBy?: LikePostOrderByWithRelationInput | LikePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikePosts.
     */
    cursor?: LikePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikePosts.
     */
    skip?: number
    distinct?: LikePostScalarFieldEnum | LikePostScalarFieldEnum[]
  }


  /**
   * LikePost create
   */
  export type LikePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * The data needed to create a LikePost.
     */
    data: XOR<LikePostCreateInput, LikePostUncheckedCreateInput>
  }


  /**
   * LikePost createMany
   */
  export type LikePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikePosts.
     */
    data: LikePostCreateManyInput | LikePostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LikePost update
   */
  export type LikePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * The data needed to update a LikePost.
     */
    data: XOR<LikePostUpdateInput, LikePostUncheckedUpdateInput>
    /**
     * Choose, which LikePost to update.
     */
    where: LikePostWhereUniqueInput
  }


  /**
   * LikePost updateMany
   */
  export type LikePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikePosts.
     */
    data: XOR<LikePostUpdateManyMutationInput, LikePostUncheckedUpdateManyInput>
    /**
     * Filter which LikePosts to update
     */
    where?: LikePostWhereInput
  }


  /**
   * LikePost upsert
   */
  export type LikePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * The filter to search for the LikePost to update in case it exists.
     */
    where: LikePostWhereUniqueInput
    /**
     * In case the LikePost found by the `where` argument doesn't exist, create a new LikePost with this data.
     */
    create: XOR<LikePostCreateInput, LikePostUncheckedCreateInput>
    /**
     * In case the LikePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikePostUpdateInput, LikePostUncheckedUpdateInput>
  }


  /**
   * LikePost delete
   */
  export type LikePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
    /**
     * Filter which LikePost to delete.
     */
    where: LikePostWhereUniqueInput
  }


  /**
   * LikePost deleteMany
   */
  export type LikePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikePosts to delete
     */
    where?: LikePostWhereInput
  }


  /**
   * LikePost without action
   */
  export type LikePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikePost
     */
    select?: LikePostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikePostInclude<ExtArgs> | null
  }



  /**
   * Model CommentPost
   */

  export type AggregateCommentPost = {
    _count: CommentPostCountAggregateOutputType | null
    _avg: CommentPostAvgAggregateOutputType | null
    _sum: CommentPostSumAggregateOutputType | null
    _min: CommentPostMinAggregateOutputType | null
    _max: CommentPostMaxAggregateOutputType | null
  }

  export type CommentPostAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    commentToId: number | null
  }

  export type CommentPostSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    commentToId: number | null
  }

  export type CommentPostMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    message: string | null
    commentToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentPostMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    message: string | null
    commentToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentPostCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    message: number
    commentToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentPostAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    commentToId?: true
  }

  export type CommentPostSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    commentToId?: true
  }

  export type CommentPostMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    commentToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentPostMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    commentToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentPostCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    commentToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentPost to aggregate.
     */
    where?: CommentPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPosts to fetch.
     */
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentPosts
    **/
    _count?: true | CommentPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentPostMaxAggregateInputType
  }

  export type GetCommentPostAggregateType<T extends CommentPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentPost[P]>
      : GetScalarType<T[P], AggregateCommentPost[P]>
  }




  export type CommentPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPostWhereInput
    orderBy?: CommentPostOrderByWithAggregationInput | CommentPostOrderByWithAggregationInput[]
    by: CommentPostScalarFieldEnum[] | CommentPostScalarFieldEnum
    having?: CommentPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentPostCountAggregateInputType | true
    _avg?: CommentPostAvgAggregateInputType
    _sum?: CommentPostSumAggregateInputType
    _min?: CommentPostMinAggregateInputType
    _max?: CommentPostMaxAggregateInputType
  }

  export type CommentPostGroupByOutputType = {
    id: number
    postId: number
    userId: number
    message: string
    commentToId: number
    createdAt: Date
    updatedAt: Date
    _count: CommentPostCountAggregateOutputType | null
    _avg: CommentPostAvgAggregateOutputType | null
    _sum: CommentPostSumAggregateOutputType | null
    _min: CommentPostMinAggregateOutputType | null
    _max: CommentPostMaxAggregateOutputType | null
  }

  type GetCommentPostGroupByPayload<T extends CommentPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommentPostGroupByOutputType[P]>
        }
      >
    >


  export type CommentPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    message?: boolean
    commentToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    commentTo?: boolean | CommentPostDefaultArgs<ExtArgs>
    commentPosts?: boolean | CommentPost$commentPostsArgs<ExtArgs>
    _count?: boolean | CommentPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentPost"]>

  export type CommentPostSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    message?: boolean
    commentToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    commentTo?: boolean | CommentPostDefaultArgs<ExtArgs>
    commentPosts?: boolean | CommentPost$commentPostsArgs<ExtArgs>
    _count?: boolean | CommentPostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommentPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      commentTo: Prisma.$CommentPostPayload<ExtArgs>
      commentPosts: Prisma.$CommentPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      userId: number
      message: string
      commentToId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commentPost"]>
    composites: {}
  }


  type CommentPostGetPayload<S extends boolean | null | undefined | CommentPostDefaultArgs> = $Result.GetResult<Prisma.$CommentPostPayload, S>

  type CommentPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentPostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentPostCountAggregateInputType | true
    }

  export interface CommentPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentPost'], meta: { name: 'CommentPost' } }
    /**
     * Find zero or one CommentPost that matches the filter.
     * @param {CommentPostFindUniqueArgs} args - Arguments to find a CommentPost
     * @example
     * // Get one CommentPost
     * const commentPost = await prisma.commentPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentPostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CommentPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentPostFindUniqueOrThrowArgs} args - Arguments to find a CommentPost
     * @example
     * // Get one CommentPost
     * const commentPost = await prisma.commentPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentPostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CommentPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostFindFirstArgs} args - Arguments to find a CommentPost
     * @example
     * // Get one CommentPost
     * const commentPost = await prisma.commentPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentPostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostFindFirstArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CommentPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostFindFirstOrThrowArgs} args - Arguments to find a CommentPost
     * @example
     * // Get one CommentPost
     * const commentPost = await prisma.commentPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentPostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CommentPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentPosts
     * const commentPosts = await prisma.commentPost.findMany()
     * 
     * // Get first 10 CommentPosts
     * const commentPosts = await prisma.commentPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentPostWithIdOnly = await prisma.commentPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentPostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CommentPost.
     * @param {CommentPostCreateArgs} args - Arguments to create a CommentPost.
     * @example
     * // Create one CommentPost
     * const CommentPost = await prisma.commentPost.create({
     *   data: {
     *     // ... data to create a CommentPost
     *   }
     * })
     * 
    **/
    create<T extends CommentPostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostCreateArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CommentPosts.
     *     @param {CommentPostCreateManyArgs} args - Arguments to create many CommentPosts.
     *     @example
     *     // Create many CommentPosts
     *     const commentPost = await prisma.commentPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentPostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommentPost.
     * @param {CommentPostDeleteArgs} args - Arguments to delete one CommentPost.
     * @example
     * // Delete one CommentPost
     * const CommentPost = await prisma.commentPost.delete({
     *   where: {
     *     // ... filter to delete one CommentPost
     *   }
     * })
     * 
    **/
    delete<T extends CommentPostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostDeleteArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CommentPost.
     * @param {CommentPostUpdateArgs} args - Arguments to update one CommentPost.
     * @example
     * // Update one CommentPost
     * const commentPost = await prisma.commentPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentPostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostUpdateArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CommentPosts.
     * @param {CommentPostDeleteManyArgs} args - Arguments to filter CommentPosts to delete.
     * @example
     * // Delete a few CommentPosts
     * const { count } = await prisma.commentPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentPostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentPostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentPosts
     * const commentPost = await prisma.commentPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentPostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommentPost.
     * @param {CommentPostUpsertArgs} args - Arguments to update or create a CommentPost.
     * @example
     * // Update or create a CommentPost
     * const commentPost = await prisma.commentPost.upsert({
     *   create: {
     *     // ... data to create a CommentPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentPost we want to update
     *   }
     * })
    **/
    upsert<T extends CommentPostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentPostUpsertArgs<ExtArgs>>
    ): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CommentPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostCountArgs} args - Arguments to filter CommentPosts to count.
     * @example
     * // Count the number of CommentPosts
     * const count = await prisma.commentPost.count({
     *   where: {
     *     // ... the filter for the CommentPosts we want to count
     *   }
     * })
    **/
    count<T extends CommentPostCountArgs>(
      args?: Subset<T, CommentPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentPostAggregateArgs>(args: Subset<T, CommentPostAggregateArgs>): Prisma.PrismaPromise<GetCommentPostAggregateType<T>>

    /**
     * Group by CommentPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentPostGroupByArgs['orderBy'] }
        : { orderBy?: CommentPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentPost model
   */
  readonly fields: CommentPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    commentTo<T extends CommentPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentPostDefaultArgs<ExtArgs>>): Prisma__CommentPostClient<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    commentPosts<T extends CommentPost$commentPostsArgs<ExtArgs> = {}>(args?: Subset<T, CommentPost$commentPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPostPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CommentPost model
   */ 
  interface CommentPostFieldRefs {
    readonly id: FieldRef<"CommentPost", 'Int'>
    readonly postId: FieldRef<"CommentPost", 'Int'>
    readonly userId: FieldRef<"CommentPost", 'Int'>
    readonly message: FieldRef<"CommentPost", 'String'>
    readonly commentToId: FieldRef<"CommentPost", 'Int'>
    readonly createdAt: FieldRef<"CommentPost", 'DateTime'>
    readonly updatedAt: FieldRef<"CommentPost", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CommentPost findUnique
   */
  export type CommentPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter, which CommentPost to fetch.
     */
    where: CommentPostWhereUniqueInput
  }


  /**
   * CommentPost findUniqueOrThrow
   */
  export type CommentPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter, which CommentPost to fetch.
     */
    where: CommentPostWhereUniqueInput
  }


  /**
   * CommentPost findFirst
   */
  export type CommentPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter, which CommentPost to fetch.
     */
    where?: CommentPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPosts to fetch.
     */
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentPosts.
     */
    cursor?: CommentPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentPosts.
     */
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * CommentPost findFirstOrThrow
   */
  export type CommentPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter, which CommentPost to fetch.
     */
    where?: CommentPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPosts to fetch.
     */
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentPosts.
     */
    cursor?: CommentPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentPosts.
     */
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * CommentPost findMany
   */
  export type CommentPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter, which CommentPosts to fetch.
     */
    where?: CommentPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPosts to fetch.
     */
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentPosts.
     */
    cursor?: CommentPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPosts.
     */
    skip?: number
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * CommentPost create
   */
  export type CommentPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentPost.
     */
    data: XOR<CommentPostCreateInput, CommentPostUncheckedCreateInput>
  }


  /**
   * CommentPost createMany
   */
  export type CommentPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentPosts.
     */
    data: CommentPostCreateManyInput | CommentPostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CommentPost update
   */
  export type CommentPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentPost.
     */
    data: XOR<CommentPostUpdateInput, CommentPostUncheckedUpdateInput>
    /**
     * Choose, which CommentPost to update.
     */
    where: CommentPostWhereUniqueInput
  }


  /**
   * CommentPost updateMany
   */
  export type CommentPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentPosts.
     */
    data: XOR<CommentPostUpdateManyMutationInput, CommentPostUncheckedUpdateManyInput>
    /**
     * Filter which CommentPosts to update
     */
    where?: CommentPostWhereInput
  }


  /**
   * CommentPost upsert
   */
  export type CommentPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentPost to update in case it exists.
     */
    where: CommentPostWhereUniqueInput
    /**
     * In case the CommentPost found by the `where` argument doesn't exist, create a new CommentPost with this data.
     */
    create: XOR<CommentPostCreateInput, CommentPostUncheckedCreateInput>
    /**
     * In case the CommentPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentPostUpdateInput, CommentPostUncheckedUpdateInput>
  }


  /**
   * CommentPost delete
   */
  export type CommentPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    /**
     * Filter which CommentPost to delete.
     */
    where: CommentPostWhereUniqueInput
  }


  /**
   * CommentPost deleteMany
   */
  export type CommentPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentPosts to delete
     */
    where?: CommentPostWhereInput
  }


  /**
   * CommentPost.commentPosts
   */
  export type CommentPost$commentPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
    where?: CommentPostWhereInput
    orderBy?: CommentPostOrderByWithRelationInput | CommentPostOrderByWithRelationInput[]
    cursor?: CommentPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentPostScalarFieldEnum | CommentPostScalarFieldEnum[]
  }


  /**
   * CommentPost without action
   */
  export type CommentPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPost
     */
    select?: CommentPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentPostInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fname: 'fname',
    lname: 'lname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikePostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikePostScalarFieldEnum = (typeof LikePostScalarFieldEnum)[keyof typeof LikePostScalarFieldEnum]


  export const CommentPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    message: 'message',
    commentToId: 'commentToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentPostScalarFieldEnum = (typeof CommentPostScalarFieldEnum)[keyof typeof CommentPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    follows?: UserListRelationFilter
    tofollows?: UserListRelationFilter
    posts?: PostListRelationFilter
    likes?: LikePostListRelationFilter
    commentPosts?: CommentPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    follows?: UserOrderByRelationAggregateInput
    tofollows?: UserOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    likes?: LikePostOrderByRelationAggregateInput
    commentPosts?: CommentPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    follows?: UserListRelationFilter
    tofollows?: UserListRelationFilter
    posts?: PostListRelationFilter
    likes?: LikePostListRelationFilter
    commentPosts?: CommentPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fname?: StringWithAggregatesFilter<"User"> | string
    lname?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    message?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    likes?: LikePostListRelationFilter
    commentPosts?: CommentPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    likes?: LikePostOrderByRelationAggregateInput
    commentPosts?: CommentPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: IntFilter<"Post"> | number
    message?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    likes?: LikePostListRelationFilter
    commentPosts?: CommentPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    message?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type LikePostWhereInput = {
    AND?: LikePostWhereInput | LikePostWhereInput[]
    OR?: LikePostWhereInput[]
    NOT?: LikePostWhereInput | LikePostWhereInput[]
    id?: IntFilter<"LikePost"> | number
    userId?: IntFilter<"LikePost"> | number
    postId?: IntFilter<"LikePost"> | number
    createdAt?: DateTimeFilter<"LikePost"> | Date | string
    updatedAt?: DateTimeFilter<"LikePost"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    posts?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type LikePostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    posts?: PostOrderByWithRelationInput
  }

  export type LikePostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikePostWhereInput | LikePostWhereInput[]
    OR?: LikePostWhereInput[]
    NOT?: LikePostWhereInput | LikePostWhereInput[]
    userId?: IntFilter<"LikePost"> | number
    postId?: IntFilter<"LikePost"> | number
    createdAt?: DateTimeFilter<"LikePost"> | Date | string
    updatedAt?: DateTimeFilter<"LikePost"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    posts?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type LikePostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikePostCountOrderByAggregateInput
    _avg?: LikePostAvgOrderByAggregateInput
    _max?: LikePostMaxOrderByAggregateInput
    _min?: LikePostMinOrderByAggregateInput
    _sum?: LikePostSumOrderByAggregateInput
  }

  export type LikePostScalarWhereWithAggregatesInput = {
    AND?: LikePostScalarWhereWithAggregatesInput | LikePostScalarWhereWithAggregatesInput[]
    OR?: LikePostScalarWhereWithAggregatesInput[]
    NOT?: LikePostScalarWhereWithAggregatesInput | LikePostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikePost"> | number
    userId?: IntWithAggregatesFilter<"LikePost"> | number
    postId?: IntWithAggregatesFilter<"LikePost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikePost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LikePost"> | Date | string
  }

  export type CommentPostWhereInput = {
    AND?: CommentPostWhereInput | CommentPostWhereInput[]
    OR?: CommentPostWhereInput[]
    NOT?: CommentPostWhereInput | CommentPostWhereInput[]
    id?: IntFilter<"CommentPost"> | number
    postId?: IntFilter<"CommentPost"> | number
    userId?: IntFilter<"CommentPost"> | number
    message?: StringFilter<"CommentPost"> | string
    commentToId?: IntFilter<"CommentPost"> | number
    createdAt?: DateTimeFilter<"CommentPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommentPost"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    commentTo?: XOR<CommentPostRelationFilter, CommentPostWhereInput>
    commentPosts?: CommentPostListRelationFilter
  }

  export type CommentPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    commentToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    commentTo?: CommentPostOrderByWithRelationInput
    commentPosts?: CommentPostOrderByRelationAggregateInput
  }

  export type CommentPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentPostWhereInput | CommentPostWhereInput[]
    OR?: CommentPostWhereInput[]
    NOT?: CommentPostWhereInput | CommentPostWhereInput[]
    postId?: IntFilter<"CommentPost"> | number
    userId?: IntFilter<"CommentPost"> | number
    message?: StringFilter<"CommentPost"> | string
    commentToId?: IntFilter<"CommentPost"> | number
    createdAt?: DateTimeFilter<"CommentPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommentPost"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    commentTo?: XOR<CommentPostRelationFilter, CommentPostWhereInput>
    commentPosts?: CommentPostListRelationFilter
  }, "id">

  export type CommentPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    commentToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentPostCountOrderByAggregateInput
    _avg?: CommentPostAvgOrderByAggregateInput
    _max?: CommentPostMaxOrderByAggregateInput
    _min?: CommentPostMinOrderByAggregateInput
    _sum?: CommentPostSumOrderByAggregateInput
  }

  export type CommentPostScalarWhereWithAggregatesInput = {
    AND?: CommentPostScalarWhereWithAggregatesInput | CommentPostScalarWhereWithAggregatesInput[]
    OR?: CommentPostScalarWhereWithAggregatesInput[]
    NOT?: CommentPostScalarWhereWithAggregatesInput | CommentPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentPost"> | number
    postId?: IntWithAggregatesFilter<"CommentPost"> | number
    userId?: IntWithAggregatesFilter<"CommentPost"> | number
    message?: StringWithAggregatesFilter<"CommentPost"> | string
    commentToId?: IntWithAggregatesFilter<"CommentPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CommentPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommentPost"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserCreateNestedManyWithoutTofollowsInput
    tofollows?: UserCreateNestedManyWithoutFollowsInput
    posts?: PostCreateNestedManyWithoutUserInput
    likes?: LikePostCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserUncheckedCreateNestedManyWithoutTofollowsInput
    tofollows?: UserUncheckedCreateNestedManyWithoutFollowsInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    likes?: LikePostUncheckedCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUpdateManyWithoutFollowsNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    likes?: LikePostUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUncheckedUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUncheckedUpdateManyWithoutFollowsNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikePostUncheckedUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    likes?: LikePostCreateNestedManyWithoutPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikePostUncheckedCreateNestedManyWithoutPostsInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikePostUpdateManyWithoutPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikePostUncheckedUpdateManyWithoutPostsNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    posts: PostCreateNestedOneWithoutLikesInput
  }

  export type LikePostUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    posts?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikePostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostCreateManyInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostCreateInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentPostsInput
    user: UserCreateNestedOneWithoutCommentPostsInput
    commentTo: CommentPostCreateNestedOneWithoutCommentPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentPostsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentPostsNestedInput
    commentTo?: CommentPostUpdateOneRequiredWithoutCommentPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPosts?: CommentPostUncheckedUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostCreateManyInput = {
    id?: number
    postId: number
    userId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentPostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type LikePostListRelationFilter = {
    every?: LikePostWhereInput
    some?: LikePostWhereInput
    none?: LikePostWhereInput
  }

  export type CommentPostListRelationFilter = {
    every?: CommentPostWhereInput
    some?: CommentPostWhereInput
    none?: CommentPostWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikePostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type LikePostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikePostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type LikePostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikePostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikePostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentPostRelationFilter = {
    is?: CommentPostWhereInput
    isNot?: CommentPostWhereInput
  }

  export type CommentPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    commentToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    commentToId?: SortOrder
  }

  export type CommentPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    commentToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    commentToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentPostSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    commentToId?: SortOrder
  }

  export type UserCreateNestedManyWithoutTofollowsInput = {
    create?: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput> | UserCreateWithoutTofollowsInput[] | UserUncheckedCreateWithoutTofollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTofollowsInput | UserCreateOrConnectWithoutTofollowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowsInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput> | UserCreateWithoutFollowsInput[] | UserUncheckedCreateWithoutFollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput | UserCreateOrConnectWithoutFollowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LikePostCreateNestedManyWithoutUserInput = {
    create?: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput> | LikePostCreateWithoutUserInput[] | LikePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutUserInput | LikePostCreateOrConnectWithoutUserInput[]
    createMany?: LikePostCreateManyUserInputEnvelope
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
  }

  export type CommentPostCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput> | CommentPostCreateWithoutUserInput[] | CommentPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutUserInput | CommentPostCreateOrConnectWithoutUserInput[]
    createMany?: CommentPostCreateManyUserInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTofollowsInput = {
    create?: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput> | UserCreateWithoutTofollowsInput[] | UserUncheckedCreateWithoutTofollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTofollowsInput | UserCreateOrConnectWithoutTofollowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowsInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput> | UserCreateWithoutFollowsInput[] | UserUncheckedCreateWithoutFollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput | UserCreateOrConnectWithoutFollowsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LikePostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput> | LikePostCreateWithoutUserInput[] | LikePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutUserInput | LikePostCreateOrConnectWithoutUserInput[]
    createMany?: LikePostCreateManyUserInputEnvelope
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
  }

  export type CommentPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput> | CommentPostCreateWithoutUserInput[] | CommentPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutUserInput | CommentPostCreateOrConnectWithoutUserInput[]
    createMany?: CommentPostCreateManyUserInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTofollowsNestedInput = {
    create?: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput> | UserCreateWithoutTofollowsInput[] | UserUncheckedCreateWithoutTofollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTofollowsInput | UserCreateOrConnectWithoutTofollowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTofollowsInput | UserUpsertWithWhereUniqueWithoutTofollowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTofollowsInput | UserUpdateWithWhereUniqueWithoutTofollowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTofollowsInput | UserUpdateManyWithWhereWithoutTofollowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput> | UserCreateWithoutFollowsInput[] | UserUncheckedCreateWithoutFollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput | UserCreateOrConnectWithoutFollowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowsInput | UserUpsertWithWhereUniqueWithoutFollowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowsInput | UserUpdateWithWhereUniqueWithoutFollowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowsInput | UserUpdateManyWithWhereWithoutFollowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LikePostUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput> | LikePostCreateWithoutUserInput[] | LikePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutUserInput | LikePostCreateOrConnectWithoutUserInput[]
    upsert?: LikePostUpsertWithWhereUniqueWithoutUserInput | LikePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikePostCreateManyUserInputEnvelope
    set?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    disconnect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    delete?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    update?: LikePostUpdateWithWhereUniqueWithoutUserInput | LikePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikePostUpdateManyWithWhereWithoutUserInput | LikePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
  }

  export type CommentPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput> | CommentPostCreateWithoutUserInput[] | CommentPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutUserInput | CommentPostCreateOrConnectWithoutUserInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutUserInput | CommentPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentPostCreateManyUserInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutUserInput | CommentPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutUserInput | CommentPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutTofollowsNestedInput = {
    create?: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput> | UserCreateWithoutTofollowsInput[] | UserUncheckedCreateWithoutTofollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTofollowsInput | UserCreateOrConnectWithoutTofollowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTofollowsInput | UserUpsertWithWhereUniqueWithoutTofollowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTofollowsInput | UserUpdateWithWhereUniqueWithoutTofollowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTofollowsInput | UserUpdateManyWithWhereWithoutTofollowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput> | UserCreateWithoutFollowsInput[] | UserUncheckedCreateWithoutFollowsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput | UserCreateOrConnectWithoutFollowsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowsInput | UserUpsertWithWhereUniqueWithoutFollowsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowsInput | UserUpdateWithWhereUniqueWithoutFollowsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowsInput | UserUpdateManyWithWhereWithoutFollowsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LikePostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput> | LikePostCreateWithoutUserInput[] | LikePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutUserInput | LikePostCreateOrConnectWithoutUserInput[]
    upsert?: LikePostUpsertWithWhereUniqueWithoutUserInput | LikePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikePostCreateManyUserInputEnvelope
    set?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    disconnect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    delete?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    update?: LikePostUpdateWithWhereUniqueWithoutUserInput | LikePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikePostUpdateManyWithWhereWithoutUserInput | LikePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
  }

  export type CommentPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput> | CommentPostCreateWithoutUserInput[] | CommentPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutUserInput | CommentPostCreateOrConnectWithoutUserInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutUserInput | CommentPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentPostCreateManyUserInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutUserInput | CommentPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutUserInput | CommentPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type LikePostCreateNestedManyWithoutPostsInput = {
    create?: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput> | LikePostCreateWithoutPostsInput[] | LikePostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutPostsInput | LikePostCreateOrConnectWithoutPostsInput[]
    createMany?: LikePostCreateManyPostsInputEnvelope
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
  }

  export type CommentPostCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput> | CommentPostCreateWithoutPostInput[] | CommentPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutPostInput | CommentPostCreateOrConnectWithoutPostInput[]
    createMany?: CommentPostCreateManyPostInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type LikePostUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput> | LikePostCreateWithoutPostsInput[] | LikePostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutPostsInput | LikePostCreateOrConnectWithoutPostsInput[]
    createMany?: LikePostCreateManyPostsInputEnvelope
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
  }

  export type CommentPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput> | CommentPostCreateWithoutPostInput[] | CommentPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutPostInput | CommentPostCreateOrConnectWithoutPostInput[]
    createMany?: CommentPostCreateManyPostInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type LikePostUpdateManyWithoutPostsNestedInput = {
    create?: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput> | LikePostCreateWithoutPostsInput[] | LikePostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutPostsInput | LikePostCreateOrConnectWithoutPostsInput[]
    upsert?: LikePostUpsertWithWhereUniqueWithoutPostsInput | LikePostUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: LikePostCreateManyPostsInputEnvelope
    set?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    disconnect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    delete?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    update?: LikePostUpdateWithWhereUniqueWithoutPostsInput | LikePostUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: LikePostUpdateManyWithWhereWithoutPostsInput | LikePostUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
  }

  export type CommentPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput> | CommentPostCreateWithoutPostInput[] | CommentPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutPostInput | CommentPostCreateOrConnectWithoutPostInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutPostInput | CommentPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentPostCreateManyPostInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutPostInput | CommentPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutPostInput | CommentPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type LikePostUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput> | LikePostCreateWithoutPostsInput[] | LikePostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: LikePostCreateOrConnectWithoutPostsInput | LikePostCreateOrConnectWithoutPostsInput[]
    upsert?: LikePostUpsertWithWhereUniqueWithoutPostsInput | LikePostUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: LikePostCreateManyPostsInputEnvelope
    set?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    disconnect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    delete?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    connect?: LikePostWhereUniqueInput | LikePostWhereUniqueInput[]
    update?: LikePostUpdateWithWhereUniqueWithoutPostsInput | LikePostUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: LikePostUpdateManyWithWhereWithoutPostsInput | LikePostUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
  }

  export type CommentPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput> | CommentPostCreateWithoutPostInput[] | CommentPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutPostInput | CommentPostCreateOrConnectWithoutPostInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutPostInput | CommentPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentPostCreateManyPostInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutPostInput | CommentPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutPostInput | CommentPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostCreateNestedOneWithoutCommentPostsInput = {
    create?: XOR<PostCreateWithoutCommentPostsInput, PostUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentPostsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentPostsInput = {
    create?: XOR<UserCreateWithoutCommentPostsInput, UserUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentPostCreateNestedOneWithoutCommentPostsInput = {
    create?: XOR<CommentPostCreateWithoutCommentPostsInput, CommentPostUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentPostsInput
    connect?: CommentPostWhereUniqueInput
  }

  export type CommentPostCreateNestedManyWithoutCommentToInput = {
    create?: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput> | CommentPostCreateWithoutCommentToInput[] | CommentPostUncheckedCreateWithoutCommentToInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentToInput | CommentPostCreateOrConnectWithoutCommentToInput[]
    createMany?: CommentPostCreateManyCommentToInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type CommentPostUncheckedCreateNestedManyWithoutCommentToInput = {
    create?: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput> | CommentPostCreateWithoutCommentToInput[] | CommentPostUncheckedCreateWithoutCommentToInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentToInput | CommentPostCreateOrConnectWithoutCommentToInput[]
    createMany?: CommentPostCreateManyCommentToInputEnvelope
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentPostsNestedInput = {
    create?: XOR<PostCreateWithoutCommentPostsInput, PostUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentPostsInput
    upsert?: PostUpsertWithoutCommentPostsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentPostsInput, PostUpdateWithoutCommentPostsInput>, PostUncheckedUpdateWithoutCommentPostsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentPostsNestedInput = {
    create?: XOR<UserCreateWithoutCommentPostsInput, UserUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentPostsInput
    upsert?: UserUpsertWithoutCommentPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentPostsInput, UserUpdateWithoutCommentPostsInput>, UserUncheckedUpdateWithoutCommentPostsInput>
  }

  export type CommentPostUpdateOneRequiredWithoutCommentPostsNestedInput = {
    create?: XOR<CommentPostCreateWithoutCommentPostsInput, CommentPostUncheckedCreateWithoutCommentPostsInput>
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentPostsInput
    upsert?: CommentPostUpsertWithoutCommentPostsInput
    connect?: CommentPostWhereUniqueInput
    update?: XOR<XOR<CommentPostUpdateToOneWithWhereWithoutCommentPostsInput, CommentPostUpdateWithoutCommentPostsInput>, CommentPostUncheckedUpdateWithoutCommentPostsInput>
  }

  export type CommentPostUpdateManyWithoutCommentToNestedInput = {
    create?: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput> | CommentPostCreateWithoutCommentToInput[] | CommentPostUncheckedCreateWithoutCommentToInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentToInput | CommentPostCreateOrConnectWithoutCommentToInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutCommentToInput | CommentPostUpsertWithWhereUniqueWithoutCommentToInput[]
    createMany?: CommentPostCreateManyCommentToInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutCommentToInput | CommentPostUpdateWithWhereUniqueWithoutCommentToInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutCommentToInput | CommentPostUpdateManyWithWhereWithoutCommentToInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type CommentPostUncheckedUpdateManyWithoutCommentToNestedInput = {
    create?: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput> | CommentPostCreateWithoutCommentToInput[] | CommentPostUncheckedCreateWithoutCommentToInput[]
    connectOrCreate?: CommentPostCreateOrConnectWithoutCommentToInput | CommentPostCreateOrConnectWithoutCommentToInput[]
    upsert?: CommentPostUpsertWithWhereUniqueWithoutCommentToInput | CommentPostUpsertWithWhereUniqueWithoutCommentToInput[]
    createMany?: CommentPostCreateManyCommentToInputEnvelope
    set?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    disconnect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    delete?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    connect?: CommentPostWhereUniqueInput | CommentPostWhereUniqueInput[]
    update?: CommentPostUpdateWithWhereUniqueWithoutCommentToInput | CommentPostUpdateWithWhereUniqueWithoutCommentToInput[]
    updateMany?: CommentPostUpdateManyWithWhereWithoutCommentToInput | CommentPostUpdateManyWithWhereWithoutCommentToInput[]
    deleteMany?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutTofollowsInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserCreateNestedManyWithoutTofollowsInput
    posts?: PostCreateNestedManyWithoutUserInput
    likes?: LikePostCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTofollowsInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserUncheckedCreateNestedManyWithoutTofollowsInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    likes?: LikePostUncheckedCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTofollowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput>
  }

  export type UserCreateWithoutFollowsInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tofollows?: UserCreateNestedManyWithoutFollowsInput
    posts?: PostCreateNestedManyWithoutUserInput
    likes?: LikePostCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowsInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tofollows?: UserUncheckedCreateNestedManyWithoutFollowsInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    likes?: LikePostUncheckedCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
  }

  export type PostCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikePostCreateNestedManyWithoutPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikePostUncheckedCreateNestedManyWithoutPostsInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikePostCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    posts: PostCreateNestedOneWithoutLikesInput
  }

  export type LikePostUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostCreateOrConnectWithoutUserInput = {
    where: LikePostWhereUniqueInput
    create: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput>
  }

  export type LikePostCreateManyUserInputEnvelope = {
    data: LikePostCreateManyUserInput | LikePostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentPostCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentPostsInput
    commentTo: CommentPostCreateNestedOneWithoutCommentPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostCreateOrConnectWithoutUserInput = {
    where: CommentPostWhereUniqueInput
    create: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput>
  }

  export type CommentPostCreateManyUserInputEnvelope = {
    data: CommentPostCreateManyUserInput | CommentPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTofollowsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTofollowsInput, UserUncheckedUpdateWithoutTofollowsInput>
    create: XOR<UserCreateWithoutTofollowsInput, UserUncheckedCreateWithoutTofollowsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTofollowsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTofollowsInput, UserUncheckedUpdateWithoutTofollowsInput>
  }

  export type UserUpdateManyWithWhereWithoutTofollowsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTofollowsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    message?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type LikePostUpsertWithWhereUniqueWithoutUserInput = {
    where: LikePostWhereUniqueInput
    update: XOR<LikePostUpdateWithoutUserInput, LikePostUncheckedUpdateWithoutUserInput>
    create: XOR<LikePostCreateWithoutUserInput, LikePostUncheckedCreateWithoutUserInput>
  }

  export type LikePostUpdateWithWhereUniqueWithoutUserInput = {
    where: LikePostWhereUniqueInput
    data: XOR<LikePostUpdateWithoutUserInput, LikePostUncheckedUpdateWithoutUserInput>
  }

  export type LikePostUpdateManyWithWhereWithoutUserInput = {
    where: LikePostScalarWhereInput
    data: XOR<LikePostUpdateManyMutationInput, LikePostUncheckedUpdateManyWithoutUserInput>
  }

  export type LikePostScalarWhereInput = {
    AND?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
    OR?: LikePostScalarWhereInput[]
    NOT?: LikePostScalarWhereInput | LikePostScalarWhereInput[]
    id?: IntFilter<"LikePost"> | number
    userId?: IntFilter<"LikePost"> | number
    postId?: IntFilter<"LikePost"> | number
    createdAt?: DateTimeFilter<"LikePost"> | Date | string
    updatedAt?: DateTimeFilter<"LikePost"> | Date | string
  }

  export type CommentPostUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentPostWhereUniqueInput
    update: XOR<CommentPostUpdateWithoutUserInput, CommentPostUncheckedUpdateWithoutUserInput>
    create: XOR<CommentPostCreateWithoutUserInput, CommentPostUncheckedCreateWithoutUserInput>
  }

  export type CommentPostUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentPostWhereUniqueInput
    data: XOR<CommentPostUpdateWithoutUserInput, CommentPostUncheckedUpdateWithoutUserInput>
  }

  export type CommentPostUpdateManyWithWhereWithoutUserInput = {
    where: CommentPostScalarWhereInput
    data: XOR<CommentPostUpdateManyMutationInput, CommentPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentPostScalarWhereInput = {
    AND?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
    OR?: CommentPostScalarWhereInput[]
    NOT?: CommentPostScalarWhereInput | CommentPostScalarWhereInput[]
    id?: IntFilter<"CommentPost"> | number
    postId?: IntFilter<"CommentPost"> | number
    userId?: IntFilter<"CommentPost"> | number
    message?: StringFilter<"CommentPost"> | string
    commentToId?: IntFilter<"CommentPost"> | number
    createdAt?: DateTimeFilter<"CommentPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommentPost"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserCreateNestedManyWithoutTofollowsInput
    tofollows?: UserCreateNestedManyWithoutFollowsInput
    likes?: LikePostCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserUncheckedCreateNestedManyWithoutTofollowsInput
    tofollows?: UserUncheckedCreateNestedManyWithoutFollowsInput
    likes?: LikePostUncheckedCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type LikePostCreateWithoutPostsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikePostUncheckedCreateWithoutPostsInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostCreateOrConnectWithoutPostsInput = {
    where: LikePostWhereUniqueInput
    create: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput>
  }

  export type LikePostCreateManyPostsInputEnvelope = {
    data: LikePostCreateManyPostsInput | LikePostCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type CommentPostCreateWithoutPostInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentPostsInput
    commentTo: CommentPostCreateNestedOneWithoutCommentPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostCreateOrConnectWithoutPostInput = {
    where: CommentPostWhereUniqueInput
    create: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput>
  }

  export type CommentPostCreateManyPostInputEnvelope = {
    data: CommentPostCreateManyPostInput | CommentPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUpdateManyWithoutFollowsNestedInput
    likes?: LikePostUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUncheckedUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUncheckedUpdateManyWithoutFollowsNestedInput
    likes?: LikePostUncheckedUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikePostUpsertWithWhereUniqueWithoutPostsInput = {
    where: LikePostWhereUniqueInput
    update: XOR<LikePostUpdateWithoutPostsInput, LikePostUncheckedUpdateWithoutPostsInput>
    create: XOR<LikePostCreateWithoutPostsInput, LikePostUncheckedCreateWithoutPostsInput>
  }

  export type LikePostUpdateWithWhereUniqueWithoutPostsInput = {
    where: LikePostWhereUniqueInput
    data: XOR<LikePostUpdateWithoutPostsInput, LikePostUncheckedUpdateWithoutPostsInput>
  }

  export type LikePostUpdateManyWithWhereWithoutPostsInput = {
    where: LikePostScalarWhereInput
    data: XOR<LikePostUpdateManyMutationInput, LikePostUncheckedUpdateManyWithoutPostsInput>
  }

  export type CommentPostUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentPostWhereUniqueInput
    update: XOR<CommentPostUpdateWithoutPostInput, CommentPostUncheckedUpdateWithoutPostInput>
    create: XOR<CommentPostCreateWithoutPostInput, CommentPostUncheckedCreateWithoutPostInput>
  }

  export type CommentPostUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentPostWhereUniqueInput
    data: XOR<CommentPostUpdateWithoutPostInput, CommentPostUncheckedUpdateWithoutPostInput>
  }

  export type CommentPostUpdateManyWithWhereWithoutPostInput = {
    where: CommentPostScalarWhereInput
    data: XOR<CommentPostUpdateManyMutationInput, CommentPostUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutLikesInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserCreateNestedManyWithoutTofollowsInput
    tofollows?: UserCreateNestedManyWithoutFollowsInput
    posts?: PostCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserUncheckedCreateNestedManyWithoutTofollowsInput
    tofollows?: UserUncheckedCreateNestedManyWithoutFollowsInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type PostCreateWithoutLikesInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUpdateManyWithoutFollowsNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUncheckedUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUncheckedUpdateManyWithoutFollowsNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPosts?: CommentPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutCommentPostsInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    likes?: LikePostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentPostsInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikePostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCommentPostsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentPostsInput, PostUncheckedCreateWithoutCommentPostsInput>
  }

  export type UserCreateWithoutCommentPostsInput = {
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserCreateNestedManyWithoutTofollowsInput
    tofollows?: UserCreateNestedManyWithoutFollowsInput
    posts?: PostCreateNestedManyWithoutUserInput
    likes?: LikePostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentPostsInput = {
    id?: number
    email: string
    password: string
    fname: string
    lname: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follows?: UserUncheckedCreateNestedManyWithoutTofollowsInput
    tofollows?: UserUncheckedCreateNestedManyWithoutFollowsInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    likes?: LikePostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentPostsInput, UserUncheckedCreateWithoutCommentPostsInput>
  }

  export type CommentPostCreateWithoutCommentPostsInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentPostsInput
    user: UserCreateNestedOneWithoutCommentPostsInput
    commentTo: CommentPostCreateNestedOneWithoutCommentPostsInput
  }

  export type CommentPostUncheckedCreateWithoutCommentPostsInput = {
    id?: number
    postId: number
    userId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentPostCreateOrConnectWithoutCommentPostsInput = {
    where: CommentPostWhereUniqueInput
    create: XOR<CommentPostCreateWithoutCommentPostsInput, CommentPostUncheckedCreateWithoutCommentPostsInput>
  }

  export type CommentPostCreateWithoutCommentToInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentPostsInput
    user: UserCreateNestedOneWithoutCommentPostsInput
    commentPosts?: CommentPostCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostUncheckedCreateWithoutCommentToInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentPosts?: CommentPostUncheckedCreateNestedManyWithoutCommentToInput
  }

  export type CommentPostCreateOrConnectWithoutCommentToInput = {
    where: CommentPostWhereUniqueInput
    create: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput>
  }

  export type CommentPostCreateManyCommentToInputEnvelope = {
    data: CommentPostCreateManyCommentToInput | CommentPostCreateManyCommentToInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutCommentPostsInput = {
    update: XOR<PostUpdateWithoutCommentPostsInput, PostUncheckedUpdateWithoutCommentPostsInput>
    create: XOR<PostCreateWithoutCommentPostsInput, PostUncheckedCreateWithoutCommentPostsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentPostsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentPostsInput, PostUncheckedUpdateWithoutCommentPostsInput>
  }

  export type PostUpdateWithoutCommentPostsInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikePostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikePostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type UserUpsertWithoutCommentPostsInput = {
    update: XOR<UserUpdateWithoutCommentPostsInput, UserUncheckedUpdateWithoutCommentPostsInput>
    create: XOR<UserCreateWithoutCommentPostsInput, UserUncheckedCreateWithoutCommentPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentPostsInput, UserUncheckedUpdateWithoutCommentPostsInput>
  }

  export type UserUpdateWithoutCommentPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUpdateManyWithoutFollowsNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    likes?: LikePostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUncheckedUpdateManyWithoutTofollowsNestedInput
    tofollows?: UserUncheckedUpdateManyWithoutFollowsNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikePostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentPostUpsertWithoutCommentPostsInput = {
    update: XOR<CommentPostUpdateWithoutCommentPostsInput, CommentPostUncheckedUpdateWithoutCommentPostsInput>
    create: XOR<CommentPostCreateWithoutCommentPostsInput, CommentPostUncheckedCreateWithoutCommentPostsInput>
    where?: CommentPostWhereInput
  }

  export type CommentPostUpdateToOneWithWhereWithoutCommentPostsInput = {
    where?: CommentPostWhereInput
    data: XOR<CommentPostUpdateWithoutCommentPostsInput, CommentPostUncheckedUpdateWithoutCommentPostsInput>
  }

  export type CommentPostUpdateWithoutCommentPostsInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentPostsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentPostsNestedInput
    commentTo?: CommentPostUpdateOneRequiredWithoutCommentPostsNestedInput
  }

  export type CommentPostUncheckedUpdateWithoutCommentPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostUpsertWithWhereUniqueWithoutCommentToInput = {
    where: CommentPostWhereUniqueInput
    update: XOR<CommentPostUpdateWithoutCommentToInput, CommentPostUncheckedUpdateWithoutCommentToInput>
    create: XOR<CommentPostCreateWithoutCommentToInput, CommentPostUncheckedCreateWithoutCommentToInput>
  }

  export type CommentPostUpdateWithWhereUniqueWithoutCommentToInput = {
    where: CommentPostWhereUniqueInput
    data: XOR<CommentPostUpdateWithoutCommentToInput, CommentPostUncheckedUpdateWithoutCommentToInput>
  }

  export type CommentPostUpdateManyWithWhereWithoutCommentToInput = {
    where: CommentPostScalarWhereInput
    data: XOR<CommentPostUpdateManyMutationInput, CommentPostUncheckedUpdateManyWithoutCommentToInput>
  }

  export type PostCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentPostCreateManyUserInput = {
    id?: number
    postId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTofollowsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUpdateManyWithoutTofollowsNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    likes?: LikePostUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTofollowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follows?: UserUncheckedUpdateManyWithoutTofollowsNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikePostUncheckedUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTofollowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tofollows?: UserUpdateManyWithoutFollowsNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    likes?: LikePostUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tofollows?: UserUncheckedUpdateManyWithoutFollowsNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikePostUncheckedUpdateManyWithoutUserNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikePostUpdateManyWithoutPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikePostUncheckedUpdateManyWithoutPostsNestedInput
    commentPosts?: CommentPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikePostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentPostsNestedInput
    commentTo?: CommentPostUpdateOneRequiredWithoutCommentPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPosts?: CommentPostUncheckedUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostCreateManyPostsInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentPostCreateManyPostInput = {
    id?: number
    userId: number
    message: string
    commentToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikePostUpdateWithoutPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikePostUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikePostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostUpdateWithoutPostInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentPostsNestedInput
    commentTo?: CommentPostUpdateOneRequiredWithoutCommentPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPosts?: CommentPostUncheckedUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    commentToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentPostCreateManyCommentToInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentPostUpdateWithoutCommentToInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentPostsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentPostsNestedInput
    commentPosts?: CommentPostUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateWithoutCommentToInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPosts?: CommentPostUncheckedUpdateManyWithoutCommentToNestedInput
  }

  export type CommentPostUncheckedUpdateManyWithoutCommentToInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentPostCountOutputTypeDefaultArgs instead
     */
    export type CommentPostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentPostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikePostDefaultArgs instead
     */
    export type LikePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikePostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentPostDefaultArgs instead
     */
    export type CommentPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentPostDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}