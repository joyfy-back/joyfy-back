
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model GithubUser
 * 
 */
export type GithubUser = $Result.DefaultSelection<Prisma.$GithubUserPayload>
/**
 * Model GoogleUser
 * 
 */
export type GoogleUser = $Result.DefaultSelection<Prisma.$GoogleUserPayload>
/**
 * Model EmailConfirmation
 * 
 */
export type EmailConfirmation = $Result.DefaultSelection<Prisma.$EmailConfirmationPayload>
/**
 * Model DeviceSessions
 * 
 */
export type DeviceSessions = $Result.DefaultSelection<Prisma.$DeviceSessionsPayload>
/**
 * Model RecoveryPassword
 * 
 */
export type RecoveryPassword = $Result.DefaultSelection<Prisma.$RecoveryPasswordPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.githubUser`: Exposes CRUD operations for the **GithubUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GithubUsers
    * const githubUsers = await prisma.githubUser.findMany()
    * ```
    */
  get githubUser(): Prisma.GithubUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.googleUser`: Exposes CRUD operations for the **GoogleUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleUsers
    * const googleUsers = await prisma.googleUser.findMany()
    * ```
    */
  get googleUser(): Prisma.GoogleUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailConfirmation`: Exposes CRUD operations for the **EmailConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailConfirmations
    * const emailConfirmations = await prisma.emailConfirmation.findMany()
    * ```
    */
  get emailConfirmation(): Prisma.EmailConfirmationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceSessions`: Exposes CRUD operations for the **DeviceSessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceSessions
    * const deviceSessions = await prisma.deviceSessions.findMany()
    * ```
    */
  get deviceSessions(): Prisma.DeviceSessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recoveryPassword`: Exposes CRUD operations for the **RecoveryPassword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecoveryPasswords
    * const recoveryPasswords = await prisma.recoveryPassword.findMany()
    * ```
    */
  get recoveryPassword(): Prisma.RecoveryPasswordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    GithubUser: 'GithubUser',
    GoogleUser: 'GoogleUser',
    EmailConfirmation: 'EmailConfirmation',
    DeviceSessions: 'DeviceSessions',
    RecoveryPassword: 'RecoveryPassword'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "githubUser" | "googleUser" | "emailConfirmation" | "deviceSessions" | "recoveryPassword"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      GithubUser: {
        payload: Prisma.$GithubUserPayload<ExtArgs>
        fields: Prisma.GithubUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GithubUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GithubUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          findFirst: {
            args: Prisma.GithubUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GithubUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          findMany: {
            args: Prisma.GithubUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>[]
          }
          create: {
            args: Prisma.GithubUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          createMany: {
            args: Prisma.GithubUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GithubUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>[]
          }
          delete: {
            args: Prisma.GithubUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          update: {
            args: Prisma.GithubUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          deleteMany: {
            args: Prisma.GithubUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GithubUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GithubUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>[]
          }
          upsert: {
            args: Prisma.GithubUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubUserPayload>
          }
          aggregate: {
            args: Prisma.GithubUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGithubUser>
          }
          groupBy: {
            args: Prisma.GithubUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GithubUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GithubUserCountArgs<ExtArgs>
            result: $Utils.Optional<GithubUserCountAggregateOutputType> | number
          }
        }
      }
      GoogleUser: {
        payload: Prisma.$GoogleUserPayload<ExtArgs>
        fields: Prisma.GoogleUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          findFirst: {
            args: Prisma.GoogleUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          findMany: {
            args: Prisma.GoogleUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>[]
          }
          create: {
            args: Prisma.GoogleUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          createMany: {
            args: Prisma.GoogleUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoogleUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>[]
          }
          delete: {
            args: Prisma.GoogleUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          update: {
            args: Prisma.GoogleUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          deleteMany: {
            args: Prisma.GoogleUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoogleUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>[]
          }
          upsert: {
            args: Prisma.GoogleUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleUserPayload>
          }
          aggregate: {
            args: Prisma.GoogleUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleUser>
          }
          groupBy: {
            args: Prisma.GoogleUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleUserCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleUserCountAggregateOutputType> | number
          }
        }
      }
      EmailConfirmation: {
        payload: Prisma.$EmailConfirmationPayload<ExtArgs>
        fields: Prisma.EmailConfirmationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailConfirmationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailConfirmationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          findFirst: {
            args: Prisma.EmailConfirmationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailConfirmationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          findMany: {
            args: Prisma.EmailConfirmationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>[]
          }
          create: {
            args: Prisma.EmailConfirmationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          createMany: {
            args: Prisma.EmailConfirmationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailConfirmationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>[]
          }
          delete: {
            args: Prisma.EmailConfirmationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          update: {
            args: Prisma.EmailConfirmationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.EmailConfirmationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailConfirmationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailConfirmationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>[]
          }
          upsert: {
            args: Prisma.EmailConfirmationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailConfirmationPayload>
          }
          aggregate: {
            args: Prisma.EmailConfirmationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailConfirmation>
          }
          groupBy: {
            args: Prisma.EmailConfirmationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailConfirmationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailConfirmationCountAggregateOutputType> | number
          }
        }
      }
      DeviceSessions: {
        payload: Prisma.$DeviceSessionsPayload<ExtArgs>
        fields: Prisma.DeviceSessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceSessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceSessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          findFirst: {
            args: Prisma.DeviceSessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceSessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          findMany: {
            args: Prisma.DeviceSessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>[]
          }
          create: {
            args: Prisma.DeviceSessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          createMany: {
            args: Prisma.DeviceSessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceSessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>[]
          }
          delete: {
            args: Prisma.DeviceSessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          update: {
            args: Prisma.DeviceSessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          deleteMany: {
            args: Prisma.DeviceSessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceSessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceSessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>[]
          }
          upsert: {
            args: Prisma.DeviceSessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionsPayload>
          }
          aggregate: {
            args: Prisma.DeviceSessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceSessions>
          }
          groupBy: {
            args: Prisma.DeviceSessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceSessionsCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionsCountAggregateOutputType> | number
          }
        }
      }
      RecoveryPassword: {
        payload: Prisma.$RecoveryPasswordPayload<ExtArgs>
        fields: Prisma.RecoveryPasswordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecoveryPasswordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecoveryPasswordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          findFirst: {
            args: Prisma.RecoveryPasswordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecoveryPasswordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          findMany: {
            args: Prisma.RecoveryPasswordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>[]
          }
          create: {
            args: Prisma.RecoveryPasswordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          createMany: {
            args: Prisma.RecoveryPasswordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecoveryPasswordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>[]
          }
          delete: {
            args: Prisma.RecoveryPasswordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          update: {
            args: Prisma.RecoveryPasswordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          deleteMany: {
            args: Prisma.RecoveryPasswordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecoveryPasswordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecoveryPasswordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>[]
          }
          upsert: {
            args: Prisma.RecoveryPasswordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryPasswordPayload>
          }
          aggregate: {
            args: Prisma.RecoveryPasswordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecoveryPassword>
          }
          groupBy: {
            args: Prisma.RecoveryPasswordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecoveryPasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecoveryPasswordCountArgs<ExtArgs>
            result: $Utils.Optional<RecoveryPasswordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    githubUser?: GithubUserOmit
    googleUser?: GoogleUserOmit
    emailConfirmation?: EmailConfirmationOmit
    deviceSessions?: DeviceSessionsOmit
    recoveryPassword?: RecoveryPasswordOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    agreeToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    agreeToTerms: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    email: number
    passwordHash: number
    agreeToTerms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    passwordHash?: true
    agreeToTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    passwordHash?: true
    agreeToTerms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    passwordHash?: true
    agreeToTerms?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    userId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailConfirmation?: boolean | User$emailConfirmationArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    account?: boolean | User$accountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    agreeToTerms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "email" | "passwordHash" | "agreeToTerms" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailConfirmation?: boolean | User$emailConfirmationArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    account?: boolean | User$accountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailConfirmation: Prisma.$EmailConfirmationPayload<ExtArgs> | null
      sessions: Prisma.$DeviceSessionsPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      email: string
      passwordHash: string
      agreeToTerms: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailConfirmation<T extends User$emailConfirmationArgs<ExtArgs> = {}>(args?: Subset<T, User$emailConfirmationArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly agreeToTerms: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailConfirmation
   */
  export type User$emailConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    where?: EmailConfirmationWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    where?: DeviceSessionsWhereInput
    orderBy?: DeviceSessionsOrderByWithRelationInput | DeviceSessionsOrderByWithRelationInput[]
    cursor?: DeviceSessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceSessionsScalarFieldEnum | DeviceSessionsScalarFieldEnum[]
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    accountId: string | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    accountId: string | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    accountId: number
    userId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    accountId?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    accountId?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    accountId?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    accountId: string
    userId: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    userId?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
    GithubUser?: boolean | Account$GithubUserArgs<ExtArgs>
    GooglebUser?: boolean | Account$GooglebUserArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    userId?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    userId?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    accountId?: boolean
    userId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accountId" | "userId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
    GithubUser?: boolean | Account$GithubUserArgs<ExtArgs>
    GooglebUser?: boolean | Account$GooglebUserArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      GithubUser: Prisma.$GithubUserPayload<ExtArgs> | null
      GooglebUser: Prisma.$GoogleUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      accountId: string
      userId: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.findMany({ select: { accountId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.createManyAndReturn({
     *   select: { accountId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { accountId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Account$userArgs<ExtArgs> = {}>(args?: Subset<T, Account$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GithubUser<T extends Account$GithubUserArgs<ExtArgs> = {}>(args?: Subset<T, Account$GithubUserArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GooglebUser<T extends Account$GooglebUserArgs<ExtArgs> = {}>(args?: Subset<T, Account$GooglebUserArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly accountId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data?: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account.GithubUser
   */
  export type Account$GithubUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    where?: GithubUserWhereInput
  }

  /**
   * Account.GooglebUser
   */
  export type Account$GooglebUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    where?: GoogleUserWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model GithubUser
   */

  export type AggregateGithubUser = {
    _count: GithubUserCountAggregateOutputType | null
    _min: GithubUserMinAggregateOutputType | null
    _max: GithubUserMaxAggregateOutputType | null
  }

  export type GithubUserMinAggregateOutputType = {
    githubId: string | null
    username: string | null
    email: string | null
    accountId: string | null
  }

  export type GithubUserMaxAggregateOutputType = {
    githubId: string | null
    username: string | null
    email: string | null
    accountId: string | null
  }

  export type GithubUserCountAggregateOutputType = {
    githubId: number
    username: number
    email: number
    accountId: number
    _all: number
  }


  export type GithubUserMinAggregateInputType = {
    githubId?: true
    username?: true
    email?: true
    accountId?: true
  }

  export type GithubUserMaxAggregateInputType = {
    githubId?: true
    username?: true
    email?: true
    accountId?: true
  }

  export type GithubUserCountAggregateInputType = {
    githubId?: true
    username?: true
    email?: true
    accountId?: true
    _all?: true
  }

  export type GithubUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubUser to aggregate.
     */
    where?: GithubUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubUsers to fetch.
     */
    orderBy?: GithubUserOrderByWithRelationInput | GithubUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GithubUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GithubUsers
    **/
    _count?: true | GithubUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GithubUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GithubUserMaxAggregateInputType
  }

  export type GetGithubUserAggregateType<T extends GithubUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGithubUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGithubUser[P]>
      : GetScalarType<T[P], AggregateGithubUser[P]>
  }




  export type GithubUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GithubUserWhereInput
    orderBy?: GithubUserOrderByWithAggregationInput | GithubUserOrderByWithAggregationInput[]
    by: GithubUserScalarFieldEnum[] | GithubUserScalarFieldEnum
    having?: GithubUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GithubUserCountAggregateInputType | true
    _min?: GithubUserMinAggregateInputType
    _max?: GithubUserMaxAggregateInputType
  }

  export type GithubUserGroupByOutputType = {
    githubId: string
    username: string
    email: string
    accountId: string
    _count: GithubUserCountAggregateOutputType | null
    _min: GithubUserMinAggregateOutputType | null
    _max: GithubUserMaxAggregateOutputType | null
  }

  type GetGithubUserGroupByPayload<T extends GithubUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GithubUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GithubUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GithubUserGroupByOutputType[P]>
            : GetScalarType<T[P], GithubUserGroupByOutputType[P]>
        }
      >
    >


  export type GithubUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    githubId?: boolean
    username?: boolean
    email?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubUser"]>

  export type GithubUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    githubId?: boolean
    username?: boolean
    email?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubUser"]>

  export type GithubUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    githubId?: boolean
    username?: boolean
    email?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubUser"]>

  export type GithubUserSelectScalar = {
    githubId?: boolean
    username?: boolean
    email?: boolean
    accountId?: boolean
  }

  export type GithubUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"githubId" | "username" | "email" | "accountId", ExtArgs["result"]["githubUser"]>
  export type GithubUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GithubUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GithubUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $GithubUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GithubUser"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      githubId: string
      username: string
      email: string
      accountId: string
    }, ExtArgs["result"]["githubUser"]>
    composites: {}
  }

  type GithubUserGetPayload<S extends boolean | null | undefined | GithubUserDefaultArgs> = $Result.GetResult<Prisma.$GithubUserPayload, S>

  type GithubUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GithubUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GithubUserCountAggregateInputType | true
    }

  export interface GithubUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GithubUser'], meta: { name: 'GithubUser' } }
    /**
     * Find zero or one GithubUser that matches the filter.
     * @param {GithubUserFindUniqueArgs} args - Arguments to find a GithubUser
     * @example
     * // Get one GithubUser
     * const githubUser = await prisma.githubUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GithubUserFindUniqueArgs>(args: SelectSubset<T, GithubUserFindUniqueArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GithubUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GithubUserFindUniqueOrThrowArgs} args - Arguments to find a GithubUser
     * @example
     * // Get one GithubUser
     * const githubUser = await prisma.githubUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GithubUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GithubUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserFindFirstArgs} args - Arguments to find a GithubUser
     * @example
     * // Get one GithubUser
     * const githubUser = await prisma.githubUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GithubUserFindFirstArgs>(args?: SelectSubset<T, GithubUserFindFirstArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserFindFirstOrThrowArgs} args - Arguments to find a GithubUser
     * @example
     * // Get one GithubUser
     * const githubUser = await prisma.githubUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GithubUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GithubUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GithubUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GithubUsers
     * const githubUsers = await prisma.githubUser.findMany()
     * 
     * // Get first 10 GithubUsers
     * const githubUsers = await prisma.githubUser.findMany({ take: 10 })
     * 
     * // Only select the `githubId`
     * const githubUserWithGithubIdOnly = await prisma.githubUser.findMany({ select: { githubId: true } })
     * 
     */
    findMany<T extends GithubUserFindManyArgs>(args?: SelectSubset<T, GithubUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GithubUser.
     * @param {GithubUserCreateArgs} args - Arguments to create a GithubUser.
     * @example
     * // Create one GithubUser
     * const GithubUser = await prisma.githubUser.create({
     *   data: {
     *     // ... data to create a GithubUser
     *   }
     * })
     * 
     */
    create<T extends GithubUserCreateArgs>(args: SelectSubset<T, GithubUserCreateArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GithubUsers.
     * @param {GithubUserCreateManyArgs} args - Arguments to create many GithubUsers.
     * @example
     * // Create many GithubUsers
     * const githubUser = await prisma.githubUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GithubUserCreateManyArgs>(args?: SelectSubset<T, GithubUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GithubUsers and returns the data saved in the database.
     * @param {GithubUserCreateManyAndReturnArgs} args - Arguments to create many GithubUsers.
     * @example
     * // Create many GithubUsers
     * const githubUser = await prisma.githubUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GithubUsers and only return the `githubId`
     * const githubUserWithGithubIdOnly = await prisma.githubUser.createManyAndReturn({
     *   select: { githubId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GithubUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GithubUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GithubUser.
     * @param {GithubUserDeleteArgs} args - Arguments to delete one GithubUser.
     * @example
     * // Delete one GithubUser
     * const GithubUser = await prisma.githubUser.delete({
     *   where: {
     *     // ... filter to delete one GithubUser
     *   }
     * })
     * 
     */
    delete<T extends GithubUserDeleteArgs>(args: SelectSubset<T, GithubUserDeleteArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GithubUser.
     * @param {GithubUserUpdateArgs} args - Arguments to update one GithubUser.
     * @example
     * // Update one GithubUser
     * const githubUser = await prisma.githubUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GithubUserUpdateArgs>(args: SelectSubset<T, GithubUserUpdateArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GithubUsers.
     * @param {GithubUserDeleteManyArgs} args - Arguments to filter GithubUsers to delete.
     * @example
     * // Delete a few GithubUsers
     * const { count } = await prisma.githubUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GithubUserDeleteManyArgs>(args?: SelectSubset<T, GithubUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GithubUsers
     * const githubUser = await prisma.githubUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GithubUserUpdateManyArgs>(args: SelectSubset<T, GithubUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubUsers and returns the data updated in the database.
     * @param {GithubUserUpdateManyAndReturnArgs} args - Arguments to update many GithubUsers.
     * @example
     * // Update many GithubUsers
     * const githubUser = await prisma.githubUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GithubUsers and only return the `githubId`
     * const githubUserWithGithubIdOnly = await prisma.githubUser.updateManyAndReturn({
     *   select: { githubId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GithubUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GithubUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GithubUser.
     * @param {GithubUserUpsertArgs} args - Arguments to update or create a GithubUser.
     * @example
     * // Update or create a GithubUser
     * const githubUser = await prisma.githubUser.upsert({
     *   create: {
     *     // ... data to create a GithubUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GithubUser we want to update
     *   }
     * })
     */
    upsert<T extends GithubUserUpsertArgs>(args: SelectSubset<T, GithubUserUpsertArgs<ExtArgs>>): Prisma__GithubUserClient<$Result.GetResult<Prisma.$GithubUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GithubUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserCountArgs} args - Arguments to filter GithubUsers to count.
     * @example
     * // Count the number of GithubUsers
     * const count = await prisma.githubUser.count({
     *   where: {
     *     // ... the filter for the GithubUsers we want to count
     *   }
     * })
    **/
    count<T extends GithubUserCountArgs>(
      args?: Subset<T, GithubUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GithubUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GithubUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GithubUserAggregateArgs>(args: Subset<T, GithubUserAggregateArgs>): Prisma.PrismaPromise<GetGithubUserAggregateType<T>>

    /**
     * Group by GithubUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubUserGroupByArgs} args - Group by arguments.
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
      T extends GithubUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GithubUserGroupByArgs['orderBy'] }
        : { orderBy?: GithubUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GithubUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GithubUser model
   */
  readonly fields: GithubUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GithubUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GithubUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GithubUser model
   */ 
  interface GithubUserFieldRefs {
    readonly githubId: FieldRef<"GithubUser", 'String'>
    readonly username: FieldRef<"GithubUser", 'String'>
    readonly email: FieldRef<"GithubUser", 'String'>
    readonly accountId: FieldRef<"GithubUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GithubUser findUnique
   */
  export type GithubUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter, which GithubUser to fetch.
     */
    where: GithubUserWhereUniqueInput
  }

  /**
   * GithubUser findUniqueOrThrow
   */
  export type GithubUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter, which GithubUser to fetch.
     */
    where: GithubUserWhereUniqueInput
  }

  /**
   * GithubUser findFirst
   */
  export type GithubUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter, which GithubUser to fetch.
     */
    where?: GithubUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubUsers to fetch.
     */
    orderBy?: GithubUserOrderByWithRelationInput | GithubUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubUsers.
     */
    cursor?: GithubUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubUsers.
     */
    distinct?: GithubUserScalarFieldEnum | GithubUserScalarFieldEnum[]
  }

  /**
   * GithubUser findFirstOrThrow
   */
  export type GithubUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter, which GithubUser to fetch.
     */
    where?: GithubUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubUsers to fetch.
     */
    orderBy?: GithubUserOrderByWithRelationInput | GithubUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubUsers.
     */
    cursor?: GithubUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubUsers.
     */
    distinct?: GithubUserScalarFieldEnum | GithubUserScalarFieldEnum[]
  }

  /**
   * GithubUser findMany
   */
  export type GithubUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter, which GithubUsers to fetch.
     */
    where?: GithubUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubUsers to fetch.
     */
    orderBy?: GithubUserOrderByWithRelationInput | GithubUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GithubUsers.
     */
    cursor?: GithubUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubUsers.
     */
    skip?: number
    distinct?: GithubUserScalarFieldEnum | GithubUserScalarFieldEnum[]
  }

  /**
   * GithubUser create
   */
  export type GithubUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GithubUser.
     */
    data: XOR<GithubUserCreateInput, GithubUserUncheckedCreateInput>
  }

  /**
   * GithubUser createMany
   */
  export type GithubUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GithubUsers.
     */
    data: GithubUserCreateManyInput | GithubUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GithubUser createManyAndReturn
   */
  export type GithubUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * The data used to create many GithubUsers.
     */
    data: GithubUserCreateManyInput | GithubUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubUser update
   */
  export type GithubUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GithubUser.
     */
    data: XOR<GithubUserUpdateInput, GithubUserUncheckedUpdateInput>
    /**
     * Choose, which GithubUser to update.
     */
    where: GithubUserWhereUniqueInput
  }

  /**
   * GithubUser updateMany
   */
  export type GithubUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GithubUsers.
     */
    data: XOR<GithubUserUpdateManyMutationInput, GithubUserUncheckedUpdateManyInput>
    /**
     * Filter which GithubUsers to update
     */
    where?: GithubUserWhereInput
    /**
     * Limit how many GithubUsers to update.
     */
    limit?: number
  }

  /**
   * GithubUser updateManyAndReturn
   */
  export type GithubUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * The data used to update GithubUsers.
     */
    data: XOR<GithubUserUpdateManyMutationInput, GithubUserUncheckedUpdateManyInput>
    /**
     * Filter which GithubUsers to update
     */
    where?: GithubUserWhereInput
    /**
     * Limit how many GithubUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubUser upsert
   */
  export type GithubUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GithubUser to update in case it exists.
     */
    where: GithubUserWhereUniqueInput
    /**
     * In case the GithubUser found by the `where` argument doesn't exist, create a new GithubUser with this data.
     */
    create: XOR<GithubUserCreateInput, GithubUserUncheckedCreateInput>
    /**
     * In case the GithubUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GithubUserUpdateInput, GithubUserUncheckedUpdateInput>
  }

  /**
   * GithubUser delete
   */
  export type GithubUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
    /**
     * Filter which GithubUser to delete.
     */
    where: GithubUserWhereUniqueInput
  }

  /**
   * GithubUser deleteMany
   */
  export type GithubUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubUsers to delete
     */
    where?: GithubUserWhereInput
    /**
     * Limit how many GithubUsers to delete.
     */
    limit?: number
  }

  /**
   * GithubUser without action
   */
  export type GithubUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubUser
     */
    select?: GithubUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubUser
     */
    omit?: GithubUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubUserInclude<ExtArgs> | null
  }


  /**
   * Model GoogleUser
   */

  export type AggregateGoogleUser = {
    _count: GoogleUserCountAggregateOutputType | null
    _min: GoogleUserMinAggregateOutputType | null
    _max: GoogleUserMaxAggregateOutputType | null
  }

  export type GoogleUserMinAggregateOutputType = {
    googleId: string | null
    username: string | null
    email: string | null
    avatar: string | null
    accountId: string | null
  }

  export type GoogleUserMaxAggregateOutputType = {
    googleId: string | null
    username: string | null
    email: string | null
    avatar: string | null
    accountId: string | null
  }

  export type GoogleUserCountAggregateOutputType = {
    googleId: number
    username: number
    email: number
    avatar: number
    accountId: number
    _all: number
  }


  export type GoogleUserMinAggregateInputType = {
    googleId?: true
    username?: true
    email?: true
    avatar?: true
    accountId?: true
  }

  export type GoogleUserMaxAggregateInputType = {
    googleId?: true
    username?: true
    email?: true
    avatar?: true
    accountId?: true
  }

  export type GoogleUserCountAggregateInputType = {
    googleId?: true
    username?: true
    email?: true
    avatar?: true
    accountId?: true
    _all?: true
  }

  export type GoogleUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleUser to aggregate.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleUsers
    **/
    _count?: true | GoogleUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleUserMaxAggregateInputType
  }

  export type GetGoogleUserAggregateType<T extends GoogleUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleUser[P]>
      : GetScalarType<T[P], AggregateGoogleUser[P]>
  }




  export type GoogleUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleUserWhereInput
    orderBy?: GoogleUserOrderByWithAggregationInput | GoogleUserOrderByWithAggregationInput[]
    by: GoogleUserScalarFieldEnum[] | GoogleUserScalarFieldEnum
    having?: GoogleUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleUserCountAggregateInputType | true
    _min?: GoogleUserMinAggregateInputType
    _max?: GoogleUserMaxAggregateInputType
  }

  export type GoogleUserGroupByOutputType = {
    googleId: string
    username: string
    email: string
    avatar: string
    accountId: string
    _count: GoogleUserCountAggregateOutputType | null
    _min: GoogleUserMinAggregateOutputType | null
    _max: GoogleUserMaxAggregateOutputType | null
  }

  type GetGoogleUserGroupByPayload<T extends GoogleUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleUserGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleUserGroupByOutputType[P]>
        }
      >
    >


  export type GoogleUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    googleId?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleUser"]>

  export type GoogleUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    googleId?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleUser"]>

  export type GoogleUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    googleId?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleUser"]>

  export type GoogleUserSelectScalar = {
    googleId?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    accountId?: boolean
  }

  export type GoogleUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"googleId" | "username" | "email" | "avatar" | "accountId", ExtArgs["result"]["googleUser"]>
  export type GoogleUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GoogleUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GoogleUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $GoogleUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleUser"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      googleId: string
      username: string
      email: string
      avatar: string
      accountId: string
    }, ExtArgs["result"]["googleUser"]>
    composites: {}
  }

  type GoogleUserGetPayload<S extends boolean | null | undefined | GoogleUserDefaultArgs> = $Result.GetResult<Prisma.$GoogleUserPayload, S>

  type GoogleUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoogleUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoogleUserCountAggregateInputType | true
    }

  export interface GoogleUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleUser'], meta: { name: 'GoogleUser' } }
    /**
     * Find zero or one GoogleUser that matches the filter.
     * @param {GoogleUserFindUniqueArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleUserFindUniqueArgs>(args: SelectSubset<T, GoogleUserFindUniqueArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoogleUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleUserFindUniqueOrThrowArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindFirstArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleUserFindFirstArgs>(args?: SelectSubset<T, GoogleUserFindFirstArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindFirstOrThrowArgs} args - Arguments to find a GoogleUser
     * @example
     * // Get one GoogleUser
     * const googleUser = await prisma.googleUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoogleUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleUsers
     * const googleUsers = await prisma.googleUser.findMany()
     * 
     * // Get first 10 GoogleUsers
     * const googleUsers = await prisma.googleUser.findMany({ take: 10 })
     * 
     * // Only select the `googleId`
     * const googleUserWithGoogleIdOnly = await prisma.googleUser.findMany({ select: { googleId: true } })
     * 
     */
    findMany<T extends GoogleUserFindManyArgs>(args?: SelectSubset<T, GoogleUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoogleUser.
     * @param {GoogleUserCreateArgs} args - Arguments to create a GoogleUser.
     * @example
     * // Create one GoogleUser
     * const GoogleUser = await prisma.googleUser.create({
     *   data: {
     *     // ... data to create a GoogleUser
     *   }
     * })
     * 
     */
    create<T extends GoogleUserCreateArgs>(args: SelectSubset<T, GoogleUserCreateArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoogleUsers.
     * @param {GoogleUserCreateManyArgs} args - Arguments to create many GoogleUsers.
     * @example
     * // Create many GoogleUsers
     * const googleUser = await prisma.googleUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleUserCreateManyArgs>(args?: SelectSubset<T, GoogleUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoogleUsers and returns the data saved in the database.
     * @param {GoogleUserCreateManyAndReturnArgs} args - Arguments to create many GoogleUsers.
     * @example
     * // Create many GoogleUsers
     * const googleUser = await prisma.googleUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoogleUsers and only return the `googleId`
     * const googleUserWithGoogleIdOnly = await prisma.googleUser.createManyAndReturn({
     *   select: { googleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoogleUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GoogleUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoogleUser.
     * @param {GoogleUserDeleteArgs} args - Arguments to delete one GoogleUser.
     * @example
     * // Delete one GoogleUser
     * const GoogleUser = await prisma.googleUser.delete({
     *   where: {
     *     // ... filter to delete one GoogleUser
     *   }
     * })
     * 
     */
    delete<T extends GoogleUserDeleteArgs>(args: SelectSubset<T, GoogleUserDeleteArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoogleUser.
     * @param {GoogleUserUpdateArgs} args - Arguments to update one GoogleUser.
     * @example
     * // Update one GoogleUser
     * const googleUser = await prisma.googleUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleUserUpdateArgs>(args: SelectSubset<T, GoogleUserUpdateArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoogleUsers.
     * @param {GoogleUserDeleteManyArgs} args - Arguments to filter GoogleUsers to delete.
     * @example
     * // Delete a few GoogleUsers
     * const { count } = await prisma.googleUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleUserDeleteManyArgs>(args?: SelectSubset<T, GoogleUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleUsers
     * const googleUser = await prisma.googleUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleUserUpdateManyArgs>(args: SelectSubset<T, GoogleUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleUsers and returns the data updated in the database.
     * @param {GoogleUserUpdateManyAndReturnArgs} args - Arguments to update many GoogleUsers.
     * @example
     * // Update many GoogleUsers
     * const googleUser = await prisma.googleUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoogleUsers and only return the `googleId`
     * const googleUserWithGoogleIdOnly = await prisma.googleUser.updateManyAndReturn({
     *   select: { googleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoogleUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GoogleUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoogleUser.
     * @param {GoogleUserUpsertArgs} args - Arguments to update or create a GoogleUser.
     * @example
     * // Update or create a GoogleUser
     * const googleUser = await prisma.googleUser.upsert({
     *   create: {
     *     // ... data to create a GoogleUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleUser we want to update
     *   }
     * })
     */
    upsert<T extends GoogleUserUpsertArgs>(args: SelectSubset<T, GoogleUserUpsertArgs<ExtArgs>>): Prisma__GoogleUserClient<$Result.GetResult<Prisma.$GoogleUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoogleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserCountArgs} args - Arguments to filter GoogleUsers to count.
     * @example
     * // Count the number of GoogleUsers
     * const count = await prisma.googleUser.count({
     *   where: {
     *     // ... the filter for the GoogleUsers we want to count
     *   }
     * })
    **/
    count<T extends GoogleUserCountArgs>(
      args?: Subset<T, GoogleUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoogleUserAggregateArgs>(args: Subset<T, GoogleUserAggregateArgs>): Prisma.PrismaPromise<GetGoogleUserAggregateType<T>>

    /**
     * Group by GoogleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUserGroupByArgs} args - Group by arguments.
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
      T extends GoogleUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleUserGroupByArgs['orderBy'] }
        : { orderBy?: GoogleUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoogleUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleUser model
   */
  readonly fields: GoogleUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GoogleUser model
   */ 
  interface GoogleUserFieldRefs {
    readonly googleId: FieldRef<"GoogleUser", 'String'>
    readonly username: FieldRef<"GoogleUser", 'String'>
    readonly email: FieldRef<"GoogleUser", 'String'>
    readonly avatar: FieldRef<"GoogleUser", 'String'>
    readonly accountId: FieldRef<"GoogleUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GoogleUser findUnique
   */
  export type GoogleUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser findUniqueOrThrow
   */
  export type GoogleUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser findFirst
   */
  export type GoogleUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleUsers.
     */
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser findFirstOrThrow
   */
  export type GoogleUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUser to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleUsers.
     */
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser findMany
   */
  export type GoogleUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter, which GoogleUsers to fetch.
     */
    where?: GoogleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleUsers to fetch.
     */
    orderBy?: GoogleUserOrderByWithRelationInput | GoogleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleUsers.
     */
    cursor?: GoogleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleUsers.
     */
    skip?: number
    distinct?: GoogleUserScalarFieldEnum | GoogleUserScalarFieldEnum[]
  }

  /**
   * GoogleUser create
   */
  export type GoogleUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GoogleUser.
     */
    data: XOR<GoogleUserCreateInput, GoogleUserUncheckedCreateInput>
  }

  /**
   * GoogleUser createMany
   */
  export type GoogleUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleUsers.
     */
    data: GoogleUserCreateManyInput | GoogleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleUser createManyAndReturn
   */
  export type GoogleUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * The data used to create many GoogleUsers.
     */
    data: GoogleUserCreateManyInput | GoogleUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleUser update
   */
  export type GoogleUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GoogleUser.
     */
    data: XOR<GoogleUserUpdateInput, GoogleUserUncheckedUpdateInput>
    /**
     * Choose, which GoogleUser to update.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser updateMany
   */
  export type GoogleUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleUsers.
     */
    data: XOR<GoogleUserUpdateManyMutationInput, GoogleUserUncheckedUpdateManyInput>
    /**
     * Filter which GoogleUsers to update
     */
    where?: GoogleUserWhereInput
    /**
     * Limit how many GoogleUsers to update.
     */
    limit?: number
  }

  /**
   * GoogleUser updateManyAndReturn
   */
  export type GoogleUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * The data used to update GoogleUsers.
     */
    data: XOR<GoogleUserUpdateManyMutationInput, GoogleUserUncheckedUpdateManyInput>
    /**
     * Filter which GoogleUsers to update
     */
    where?: GoogleUserWhereInput
    /**
     * Limit how many GoogleUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleUser upsert
   */
  export type GoogleUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GoogleUser to update in case it exists.
     */
    where: GoogleUserWhereUniqueInput
    /**
     * In case the GoogleUser found by the `where` argument doesn't exist, create a new GoogleUser with this data.
     */
    create: XOR<GoogleUserCreateInput, GoogleUserUncheckedCreateInput>
    /**
     * In case the GoogleUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleUserUpdateInput, GoogleUserUncheckedUpdateInput>
  }

  /**
   * GoogleUser delete
   */
  export type GoogleUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
    /**
     * Filter which GoogleUser to delete.
     */
    where: GoogleUserWhereUniqueInput
  }

  /**
   * GoogleUser deleteMany
   */
  export type GoogleUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleUsers to delete
     */
    where?: GoogleUserWhereInput
    /**
     * Limit how many GoogleUsers to delete.
     */
    limit?: number
  }

  /**
   * GoogleUser without action
   */
  export type GoogleUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleUser
     */
    select?: GoogleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleUser
     */
    omit?: GoogleUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleUserInclude<ExtArgs> | null
  }


  /**
   * Model EmailConfirmation
   */

  export type AggregateEmailConfirmation = {
    _count: EmailConfirmationCountAggregateOutputType | null
    _min: EmailConfirmationMinAggregateOutputType | null
    _max: EmailConfirmationMaxAggregateOutputType | null
  }

  export type EmailConfirmationMinAggregateOutputType = {
    id: string | null
    confirmationCode: string | null
    expirationDate: Date | null
    isConfirmed: boolean | null
    userId: string | null
  }

  export type EmailConfirmationMaxAggregateOutputType = {
    id: string | null
    confirmationCode: string | null
    expirationDate: Date | null
    isConfirmed: boolean | null
    userId: string | null
  }

  export type EmailConfirmationCountAggregateOutputType = {
    id: number
    confirmationCode: number
    expirationDate: number
    isConfirmed: number
    userId: number
    _all: number
  }


  export type EmailConfirmationMinAggregateInputType = {
    id?: true
    confirmationCode?: true
    expirationDate?: true
    isConfirmed?: true
    userId?: true
  }

  export type EmailConfirmationMaxAggregateInputType = {
    id?: true
    confirmationCode?: true
    expirationDate?: true
    isConfirmed?: true
    userId?: true
  }

  export type EmailConfirmationCountAggregateInputType = {
    id?: true
    confirmationCode?: true
    expirationDate?: true
    isConfirmed?: true
    userId?: true
    _all?: true
  }

  export type EmailConfirmationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailConfirmation to aggregate.
     */
    where?: EmailConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailConfirmations to fetch.
     */
    orderBy?: EmailConfirmationOrderByWithRelationInput | EmailConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailConfirmations
    **/
    _count?: true | EmailConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailConfirmationMaxAggregateInputType
  }

  export type GetEmailConfirmationAggregateType<T extends EmailConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailConfirmation[P]>
      : GetScalarType<T[P], AggregateEmailConfirmation[P]>
  }




  export type EmailConfirmationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailConfirmationWhereInput
    orderBy?: EmailConfirmationOrderByWithAggregationInput | EmailConfirmationOrderByWithAggregationInput[]
    by: EmailConfirmationScalarFieldEnum[] | EmailConfirmationScalarFieldEnum
    having?: EmailConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailConfirmationCountAggregateInputType | true
    _min?: EmailConfirmationMinAggregateInputType
    _max?: EmailConfirmationMaxAggregateInputType
  }

  export type EmailConfirmationGroupByOutputType = {
    id: string
    confirmationCode: string
    expirationDate: Date
    isConfirmed: boolean
    userId: string
    _count: EmailConfirmationCountAggregateOutputType | null
    _min: EmailConfirmationMinAggregateOutputType | null
    _max: EmailConfirmationMaxAggregateOutputType | null
  }

  type GetEmailConfirmationGroupByPayload<T extends EmailConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type EmailConfirmationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confirmationCode?: boolean
    expirationDate?: boolean
    isConfirmed?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailConfirmation"]>

  export type EmailConfirmationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confirmationCode?: boolean
    expirationDate?: boolean
    isConfirmed?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailConfirmation"]>

  export type EmailConfirmationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confirmationCode?: boolean
    expirationDate?: boolean
    isConfirmed?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailConfirmation"]>

  export type EmailConfirmationSelectScalar = {
    id?: boolean
    confirmationCode?: boolean
    expirationDate?: boolean
    isConfirmed?: boolean
    userId?: boolean
  }

  export type EmailConfirmationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "confirmationCode" | "expirationDate" | "isConfirmed" | "userId", ExtArgs["result"]["emailConfirmation"]>
  export type EmailConfirmationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailConfirmationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailConfirmationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailConfirmationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailConfirmation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      confirmationCode: string
      expirationDate: Date
      isConfirmed: boolean
      userId: string
    }, ExtArgs["result"]["emailConfirmation"]>
    composites: {}
  }

  type EmailConfirmationGetPayload<S extends boolean | null | undefined | EmailConfirmationDefaultArgs> = $Result.GetResult<Prisma.$EmailConfirmationPayload, S>

  type EmailConfirmationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailConfirmationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailConfirmationCountAggregateInputType | true
    }

  export interface EmailConfirmationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailConfirmation'], meta: { name: 'EmailConfirmation' } }
    /**
     * Find zero or one EmailConfirmation that matches the filter.
     * @param {EmailConfirmationFindUniqueArgs} args - Arguments to find a EmailConfirmation
     * @example
     * // Get one EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailConfirmationFindUniqueArgs>(args: SelectSubset<T, EmailConfirmationFindUniqueArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailConfirmation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailConfirmationFindUniqueOrThrowArgs} args - Arguments to find a EmailConfirmation
     * @example
     * // Get one EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailConfirmationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailConfirmationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationFindFirstArgs} args - Arguments to find a EmailConfirmation
     * @example
     * // Get one EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailConfirmationFindFirstArgs>(args?: SelectSubset<T, EmailConfirmationFindFirstArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailConfirmation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationFindFirstOrThrowArgs} args - Arguments to find a EmailConfirmation
     * @example
     * // Get one EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailConfirmationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailConfirmationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailConfirmations
     * const emailConfirmations = await prisma.emailConfirmation.findMany()
     * 
     * // Get first 10 EmailConfirmations
     * const emailConfirmations = await prisma.emailConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailConfirmationWithIdOnly = await prisma.emailConfirmation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailConfirmationFindManyArgs>(args?: SelectSubset<T, EmailConfirmationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailConfirmation.
     * @param {EmailConfirmationCreateArgs} args - Arguments to create a EmailConfirmation.
     * @example
     * // Create one EmailConfirmation
     * const EmailConfirmation = await prisma.emailConfirmation.create({
     *   data: {
     *     // ... data to create a EmailConfirmation
     *   }
     * })
     * 
     */
    create<T extends EmailConfirmationCreateArgs>(args: SelectSubset<T, EmailConfirmationCreateArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailConfirmations.
     * @param {EmailConfirmationCreateManyArgs} args - Arguments to create many EmailConfirmations.
     * @example
     * // Create many EmailConfirmations
     * const emailConfirmation = await prisma.emailConfirmation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailConfirmationCreateManyArgs>(args?: SelectSubset<T, EmailConfirmationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailConfirmations and returns the data saved in the database.
     * @param {EmailConfirmationCreateManyAndReturnArgs} args - Arguments to create many EmailConfirmations.
     * @example
     * // Create many EmailConfirmations
     * const emailConfirmation = await prisma.emailConfirmation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailConfirmations and only return the `id`
     * const emailConfirmationWithIdOnly = await prisma.emailConfirmation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailConfirmationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailConfirmationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailConfirmation.
     * @param {EmailConfirmationDeleteArgs} args - Arguments to delete one EmailConfirmation.
     * @example
     * // Delete one EmailConfirmation
     * const EmailConfirmation = await prisma.emailConfirmation.delete({
     *   where: {
     *     // ... filter to delete one EmailConfirmation
     *   }
     * })
     * 
     */
    delete<T extends EmailConfirmationDeleteArgs>(args: SelectSubset<T, EmailConfirmationDeleteArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailConfirmation.
     * @param {EmailConfirmationUpdateArgs} args - Arguments to update one EmailConfirmation.
     * @example
     * // Update one EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailConfirmationUpdateArgs>(args: SelectSubset<T, EmailConfirmationUpdateArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailConfirmations.
     * @param {EmailConfirmationDeleteManyArgs} args - Arguments to filter EmailConfirmations to delete.
     * @example
     * // Delete a few EmailConfirmations
     * const { count } = await prisma.emailConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailConfirmationDeleteManyArgs>(args?: SelectSubset<T, EmailConfirmationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailConfirmations
     * const emailConfirmation = await prisma.emailConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailConfirmationUpdateManyArgs>(args: SelectSubset<T, EmailConfirmationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailConfirmations and returns the data updated in the database.
     * @param {EmailConfirmationUpdateManyAndReturnArgs} args - Arguments to update many EmailConfirmations.
     * @example
     * // Update many EmailConfirmations
     * const emailConfirmation = await prisma.emailConfirmation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailConfirmations and only return the `id`
     * const emailConfirmationWithIdOnly = await prisma.emailConfirmation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailConfirmationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailConfirmationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailConfirmation.
     * @param {EmailConfirmationUpsertArgs} args - Arguments to update or create a EmailConfirmation.
     * @example
     * // Update or create a EmailConfirmation
     * const emailConfirmation = await prisma.emailConfirmation.upsert({
     *   create: {
     *     // ... data to create a EmailConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailConfirmation we want to update
     *   }
     * })
     */
    upsert<T extends EmailConfirmationUpsertArgs>(args: SelectSubset<T, EmailConfirmationUpsertArgs<ExtArgs>>): Prisma__EmailConfirmationClient<$Result.GetResult<Prisma.$EmailConfirmationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationCountArgs} args - Arguments to filter EmailConfirmations to count.
     * @example
     * // Count the number of EmailConfirmations
     * const count = await prisma.emailConfirmation.count({
     *   where: {
     *     // ... the filter for the EmailConfirmations we want to count
     *   }
     * })
    **/
    count<T extends EmailConfirmationCountArgs>(
      args?: Subset<T, EmailConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailConfirmationAggregateArgs>(args: Subset<T, EmailConfirmationAggregateArgs>): Prisma.PrismaPromise<GetEmailConfirmationAggregateType<T>>

    /**
     * Group by EmailConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailConfirmationGroupByArgs} args - Group by arguments.
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
      T extends EmailConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: EmailConfirmationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailConfirmation model
   */
  readonly fields: EmailConfirmationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailConfirmationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailConfirmation model
   */ 
  interface EmailConfirmationFieldRefs {
    readonly id: FieldRef<"EmailConfirmation", 'String'>
    readonly confirmationCode: FieldRef<"EmailConfirmation", 'String'>
    readonly expirationDate: FieldRef<"EmailConfirmation", 'DateTime'>
    readonly isConfirmed: FieldRef<"EmailConfirmation", 'Boolean'>
    readonly userId: FieldRef<"EmailConfirmation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailConfirmation findUnique
   */
  export type EmailConfirmationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which EmailConfirmation to fetch.
     */
    where: EmailConfirmationWhereUniqueInput
  }

  /**
   * EmailConfirmation findUniqueOrThrow
   */
  export type EmailConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which EmailConfirmation to fetch.
     */
    where: EmailConfirmationWhereUniqueInput
  }

  /**
   * EmailConfirmation findFirst
   */
  export type EmailConfirmationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which EmailConfirmation to fetch.
     */
    where?: EmailConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailConfirmations to fetch.
     */
    orderBy?: EmailConfirmationOrderByWithRelationInput | EmailConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailConfirmations.
     */
    cursor?: EmailConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailConfirmations.
     */
    distinct?: EmailConfirmationScalarFieldEnum | EmailConfirmationScalarFieldEnum[]
  }

  /**
   * EmailConfirmation findFirstOrThrow
   */
  export type EmailConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which EmailConfirmation to fetch.
     */
    where?: EmailConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailConfirmations to fetch.
     */
    orderBy?: EmailConfirmationOrderByWithRelationInput | EmailConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailConfirmations.
     */
    cursor?: EmailConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailConfirmations.
     */
    distinct?: EmailConfirmationScalarFieldEnum | EmailConfirmationScalarFieldEnum[]
  }

  /**
   * EmailConfirmation findMany
   */
  export type EmailConfirmationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which EmailConfirmations to fetch.
     */
    where?: EmailConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailConfirmations to fetch.
     */
    orderBy?: EmailConfirmationOrderByWithRelationInput | EmailConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailConfirmations.
     */
    cursor?: EmailConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailConfirmations.
     */
    skip?: number
    distinct?: EmailConfirmationScalarFieldEnum | EmailConfirmationScalarFieldEnum[]
  }

  /**
   * EmailConfirmation create
   */
  export type EmailConfirmationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailConfirmation.
     */
    data: XOR<EmailConfirmationCreateInput, EmailConfirmationUncheckedCreateInput>
  }

  /**
   * EmailConfirmation createMany
   */
  export type EmailConfirmationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailConfirmations.
     */
    data: EmailConfirmationCreateManyInput | EmailConfirmationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailConfirmation createManyAndReturn
   */
  export type EmailConfirmationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailConfirmations.
     */
    data: EmailConfirmationCreateManyInput | EmailConfirmationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailConfirmation update
   */
  export type EmailConfirmationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailConfirmation.
     */
    data: XOR<EmailConfirmationUpdateInput, EmailConfirmationUncheckedUpdateInput>
    /**
     * Choose, which EmailConfirmation to update.
     */
    where: EmailConfirmationWhereUniqueInput
  }

  /**
   * EmailConfirmation updateMany
   */
  export type EmailConfirmationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailConfirmations.
     */
    data: XOR<EmailConfirmationUpdateManyMutationInput, EmailConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which EmailConfirmations to update
     */
    where?: EmailConfirmationWhereInput
    /**
     * Limit how many EmailConfirmations to update.
     */
    limit?: number
  }

  /**
   * EmailConfirmation updateManyAndReturn
   */
  export type EmailConfirmationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * The data used to update EmailConfirmations.
     */
    data: XOR<EmailConfirmationUpdateManyMutationInput, EmailConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which EmailConfirmations to update
     */
    where?: EmailConfirmationWhereInput
    /**
     * Limit how many EmailConfirmations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailConfirmation upsert
   */
  export type EmailConfirmationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailConfirmation to update in case it exists.
     */
    where: EmailConfirmationWhereUniqueInput
    /**
     * In case the EmailConfirmation found by the `where` argument doesn't exist, create a new EmailConfirmation with this data.
     */
    create: XOR<EmailConfirmationCreateInput, EmailConfirmationUncheckedCreateInput>
    /**
     * In case the EmailConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailConfirmationUpdateInput, EmailConfirmationUncheckedUpdateInput>
  }

  /**
   * EmailConfirmation delete
   */
  export type EmailConfirmationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
    /**
     * Filter which EmailConfirmation to delete.
     */
    where: EmailConfirmationWhereUniqueInput
  }

  /**
   * EmailConfirmation deleteMany
   */
  export type EmailConfirmationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailConfirmations to delete
     */
    where?: EmailConfirmationWhereInput
    /**
     * Limit how many EmailConfirmations to delete.
     */
    limit?: number
  }

  /**
   * EmailConfirmation without action
   */
  export type EmailConfirmationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailConfirmation
     */
    select?: EmailConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailConfirmation
     */
    omit?: EmailConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailConfirmationInclude<ExtArgs> | null
  }


  /**
   * Model DeviceSessions
   */

  export type AggregateDeviceSessions = {
    _count: DeviceSessionsCountAggregateOutputType | null
    _min: DeviceSessionsMinAggregateOutputType | null
    _max: DeviceSessionsMaxAggregateOutputType | null
  }

  export type DeviceSessionsMinAggregateOutputType = {
    deviceId: string | null
    ip: string | null
    lastActiveDate: string | null
    title: string | null
    userId: string | null
  }

  export type DeviceSessionsMaxAggregateOutputType = {
    deviceId: string | null
    ip: string | null
    lastActiveDate: string | null
    title: string | null
    userId: string | null
  }

  export type DeviceSessionsCountAggregateOutputType = {
    deviceId: number
    ip: number
    lastActiveDate: number
    title: number
    userId: number
    _all: number
  }


  export type DeviceSessionsMinAggregateInputType = {
    deviceId?: true
    ip?: true
    lastActiveDate?: true
    title?: true
    userId?: true
  }

  export type DeviceSessionsMaxAggregateInputType = {
    deviceId?: true
    ip?: true
    lastActiveDate?: true
    title?: true
    userId?: true
  }

  export type DeviceSessionsCountAggregateInputType = {
    deviceId?: true
    ip?: true
    lastActiveDate?: true
    title?: true
    userId?: true
    _all?: true
  }

  export type DeviceSessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessions to aggregate.
     */
    where?: DeviceSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionsOrderByWithRelationInput | DeviceSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceSessions
    **/
    _count?: true | DeviceSessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSessionsMaxAggregateInputType
  }

  export type GetDeviceSessionsAggregateType<T extends DeviceSessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceSessions[P]>
      : GetScalarType<T[P], AggregateDeviceSessions[P]>
  }




  export type DeviceSessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionsWhereInput
    orderBy?: DeviceSessionsOrderByWithAggregationInput | DeviceSessionsOrderByWithAggregationInput[]
    by: DeviceSessionsScalarFieldEnum[] | DeviceSessionsScalarFieldEnum
    having?: DeviceSessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceSessionsCountAggregateInputType | true
    _min?: DeviceSessionsMinAggregateInputType
    _max?: DeviceSessionsMaxAggregateInputType
  }

  export type DeviceSessionsGroupByOutputType = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
    userId: string | null
    _count: DeviceSessionsCountAggregateOutputType | null
    _min: DeviceSessionsMinAggregateOutputType | null
    _max: DeviceSessionsMaxAggregateOutputType | null
  }

  type GetDeviceSessionsGroupByPayload<T extends DeviceSessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceSessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceSessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceSessionsGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceSessionsGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    title?: boolean
    userId?: boolean
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSessions"]>

  export type DeviceSessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    title?: boolean
    userId?: boolean
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSessions"]>

  export type DeviceSessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    title?: boolean
    userId?: boolean
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSessions"]>

  export type DeviceSessionsSelectScalar = {
    deviceId?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    title?: boolean
    userId?: boolean
  }

  export type DeviceSessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceId" | "ip" | "lastActiveDate" | "title" | "userId", ExtArgs["result"]["deviceSessions"]>
  export type DeviceSessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }
  export type DeviceSessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }
  export type DeviceSessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | DeviceSessions$userArgs<ExtArgs>
  }

  export type $DeviceSessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceSessions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceId: string
      ip: string
      lastActiveDate: string
      title: string
      userId: string | null
    }, ExtArgs["result"]["deviceSessions"]>
    composites: {}
  }

  type DeviceSessionsGetPayload<S extends boolean | null | undefined | DeviceSessionsDefaultArgs> = $Result.GetResult<Prisma.$DeviceSessionsPayload, S>

  type DeviceSessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceSessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceSessionsCountAggregateInputType | true
    }

  export interface DeviceSessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceSessions'], meta: { name: 'DeviceSessions' } }
    /**
     * Find zero or one DeviceSessions that matches the filter.
     * @param {DeviceSessionsFindUniqueArgs} args - Arguments to find a DeviceSessions
     * @example
     * // Get one DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSessionsFindUniqueArgs>(args: SelectSubset<T, DeviceSessionsFindUniqueArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceSessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceSessionsFindUniqueOrThrowArgs} args - Arguments to find a DeviceSessions
     * @example
     * // Get one DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceSessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsFindFirstArgs} args - Arguments to find a DeviceSessions
     * @example
     * // Get one DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSessionsFindFirstArgs>(args?: SelectSubset<T, DeviceSessionsFindFirstArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsFindFirstOrThrowArgs} args - Arguments to find a DeviceSessions
     * @example
     * // Get one DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceSessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findMany()
     * 
     * // Get first 10 DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const deviceSessionsWithDeviceIdOnly = await prisma.deviceSessions.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends DeviceSessionsFindManyArgs>(args?: SelectSubset<T, DeviceSessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceSessions.
     * @param {DeviceSessionsCreateArgs} args - Arguments to create a DeviceSessions.
     * @example
     * // Create one DeviceSessions
     * const DeviceSessions = await prisma.deviceSessions.create({
     *   data: {
     *     // ... data to create a DeviceSessions
     *   }
     * })
     * 
     */
    create<T extends DeviceSessionsCreateArgs>(args: SelectSubset<T, DeviceSessionsCreateArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceSessions.
     * @param {DeviceSessionsCreateManyArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceSessionsCreateManyArgs>(args?: SelectSubset<T, DeviceSessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceSessions and returns the data saved in the database.
     * @param {DeviceSessionsCreateManyAndReturnArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceSessions and only return the `deviceId`
     * const deviceSessionsWithDeviceIdOnly = await prisma.deviceSessions.createManyAndReturn({
     *   select: { deviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceSessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceSessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceSessions.
     * @param {DeviceSessionsDeleteArgs} args - Arguments to delete one DeviceSessions.
     * @example
     * // Delete one DeviceSessions
     * const DeviceSessions = await prisma.deviceSessions.delete({
     *   where: {
     *     // ... filter to delete one DeviceSessions
     *   }
     * })
     * 
     */
    delete<T extends DeviceSessionsDeleteArgs>(args: SelectSubset<T, DeviceSessionsDeleteArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceSessions.
     * @param {DeviceSessionsUpdateArgs} args - Arguments to update one DeviceSessions.
     * @example
     * // Update one DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceSessionsUpdateArgs>(args: SelectSubset<T, DeviceSessionsUpdateArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceSessions.
     * @param {DeviceSessionsDeleteManyArgs} args - Arguments to filter DeviceSessions to delete.
     * @example
     * // Delete a few DeviceSessions
     * const { count } = await prisma.deviceSessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceSessionsDeleteManyArgs>(args?: SelectSubset<T, DeviceSessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceSessionsUpdateManyArgs>(args: SelectSubset<T, DeviceSessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions and returns the data updated in the database.
     * @param {DeviceSessionsUpdateManyAndReturnArgs} args - Arguments to update many DeviceSessions.
     * @example
     * // Update many DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceSessions and only return the `deviceId`
     * const deviceSessionsWithDeviceIdOnly = await prisma.deviceSessions.updateManyAndReturn({
     *   select: { deviceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceSessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceSessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceSessions.
     * @param {DeviceSessionsUpsertArgs} args - Arguments to update or create a DeviceSessions.
     * @example
     * // Update or create a DeviceSessions
     * const deviceSessions = await prisma.deviceSessions.upsert({
     *   create: {
     *     // ... data to create a DeviceSessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSessions we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSessionsUpsertArgs>(args: SelectSubset<T, DeviceSessionsUpsertArgs<ExtArgs>>): Prisma__DeviceSessionsClient<$Result.GetResult<Prisma.$DeviceSessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsCountArgs} args - Arguments to filter DeviceSessions to count.
     * @example
     * // Count the number of DeviceSessions
     * const count = await prisma.deviceSessions.count({
     *   where: {
     *     // ... the filter for the DeviceSessions we want to count
     *   }
     * })
    **/
    count<T extends DeviceSessionsCountArgs>(
      args?: Subset<T, DeviceSessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceSessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceSessionsAggregateArgs>(args: Subset<T, DeviceSessionsAggregateArgs>): Prisma.PrismaPromise<GetDeviceSessionsAggregateType<T>>

    /**
     * Group by DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionsGroupByArgs} args - Group by arguments.
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
      T extends DeviceSessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceSessionsGroupByArgs['orderBy'] }
        : { orderBy?: DeviceSessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceSessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceSessions model
   */
  readonly fields: DeviceSessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceSessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceSessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends DeviceSessions$userArgs<ExtArgs> = {}>(args?: Subset<T, DeviceSessions$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceSessions model
   */ 
  interface DeviceSessionsFieldRefs {
    readonly deviceId: FieldRef<"DeviceSessions", 'String'>
    readonly ip: FieldRef<"DeviceSessions", 'String'>
    readonly lastActiveDate: FieldRef<"DeviceSessions", 'String'>
    readonly title: FieldRef<"DeviceSessions", 'String'>
    readonly userId: FieldRef<"DeviceSessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeviceSessions findUnique
   */
  export type DeviceSessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where: DeviceSessionsWhereUniqueInput
  }

  /**
   * DeviceSessions findUniqueOrThrow
   */
  export type DeviceSessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where: DeviceSessionsWhereUniqueInput
  }

  /**
   * DeviceSessions findFirst
   */
  export type DeviceSessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionsOrderByWithRelationInput | DeviceSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionsScalarFieldEnum | DeviceSessionsScalarFieldEnum[]
  }

  /**
   * DeviceSessions findFirstOrThrow
   */
  export type DeviceSessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionsOrderByWithRelationInput | DeviceSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionsScalarFieldEnum | DeviceSessionsScalarFieldEnum[]
  }

  /**
   * DeviceSessions findMany
   */
  export type DeviceSessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionsOrderByWithRelationInput | DeviceSessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceSessions.
     */
    cursor?: DeviceSessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    distinct?: DeviceSessionsScalarFieldEnum | DeviceSessionsScalarFieldEnum[]
  }

  /**
   * DeviceSessions create
   */
  export type DeviceSessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceSessions.
     */
    data: XOR<DeviceSessionsCreateInput, DeviceSessionsUncheckedCreateInput>
  }

  /**
   * DeviceSessions createMany
   */
  export type DeviceSessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionsCreateManyInput | DeviceSessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceSessions createManyAndReturn
   */
  export type DeviceSessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionsCreateManyInput | DeviceSessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSessions update
   */
  export type DeviceSessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceSessions.
     */
    data: XOR<DeviceSessionsUpdateInput, DeviceSessionsUncheckedUpdateInput>
    /**
     * Choose, which DeviceSessions to update.
     */
    where: DeviceSessionsWhereUniqueInput
  }

  /**
   * DeviceSessions updateMany
   */
  export type DeviceSessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionsUpdateManyMutationInput, DeviceSessionsUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionsWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
  }

  /**
   * DeviceSessions updateManyAndReturn
   */
  export type DeviceSessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionsUpdateManyMutationInput, DeviceSessionsUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionsWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSessions upsert
   */
  export type DeviceSessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceSessions to update in case it exists.
     */
    where: DeviceSessionsWhereUniqueInput
    /**
     * In case the DeviceSessions found by the `where` argument doesn't exist, create a new DeviceSessions with this data.
     */
    create: XOR<DeviceSessionsCreateInput, DeviceSessionsUncheckedCreateInput>
    /**
     * In case the DeviceSessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceSessionsUpdateInput, DeviceSessionsUncheckedUpdateInput>
  }

  /**
   * DeviceSessions delete
   */
  export type DeviceSessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
    /**
     * Filter which DeviceSessions to delete.
     */
    where: DeviceSessionsWhereUniqueInput
  }

  /**
   * DeviceSessions deleteMany
   */
  export type DeviceSessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessions to delete
     */
    where?: DeviceSessionsWhereInput
    /**
     * Limit how many DeviceSessions to delete.
     */
    limit?: number
  }

  /**
   * DeviceSessions.user
   */
  export type DeviceSessions$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DeviceSessions without action
   */
  export type DeviceSessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSessions
     */
    select?: DeviceSessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSessions
     */
    omit?: DeviceSessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionsInclude<ExtArgs> | null
  }


  /**
   * Model RecoveryPassword
   */

  export type AggregateRecoveryPassword = {
    _count: RecoveryPasswordCountAggregateOutputType | null
    _min: RecoveryPasswordMinAggregateOutputType | null
    _max: RecoveryPasswordMaxAggregateOutputType | null
  }

  export type RecoveryPasswordMinAggregateOutputType = {
    recoveryPasswordId: string | null
    code: string | null
    email: string | null
  }

  export type RecoveryPasswordMaxAggregateOutputType = {
    recoveryPasswordId: string | null
    code: string | null
    email: string | null
  }

  export type RecoveryPasswordCountAggregateOutputType = {
    recoveryPasswordId: number
    code: number
    email: number
    _all: number
  }


  export type RecoveryPasswordMinAggregateInputType = {
    recoveryPasswordId?: true
    code?: true
    email?: true
  }

  export type RecoveryPasswordMaxAggregateInputType = {
    recoveryPasswordId?: true
    code?: true
    email?: true
  }

  export type RecoveryPasswordCountAggregateInputType = {
    recoveryPasswordId?: true
    code?: true
    email?: true
    _all?: true
  }

  export type RecoveryPasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryPassword to aggregate.
     */
    where?: RecoveryPasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswords to fetch.
     */
    orderBy?: RecoveryPasswordOrderByWithRelationInput | RecoveryPasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecoveryPasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecoveryPasswords
    **/
    _count?: true | RecoveryPasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecoveryPasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecoveryPasswordMaxAggregateInputType
  }

  export type GetRecoveryPasswordAggregateType<T extends RecoveryPasswordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecoveryPassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecoveryPassword[P]>
      : GetScalarType<T[P], AggregateRecoveryPassword[P]>
  }




  export type RecoveryPasswordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryPasswordWhereInput
    orderBy?: RecoveryPasswordOrderByWithAggregationInput | RecoveryPasswordOrderByWithAggregationInput[]
    by: RecoveryPasswordScalarFieldEnum[] | RecoveryPasswordScalarFieldEnum
    having?: RecoveryPasswordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecoveryPasswordCountAggregateInputType | true
    _min?: RecoveryPasswordMinAggregateInputType
    _max?: RecoveryPasswordMaxAggregateInputType
  }

  export type RecoveryPasswordGroupByOutputType = {
    recoveryPasswordId: string
    code: string
    email: string
    _count: RecoveryPasswordCountAggregateOutputType | null
    _min: RecoveryPasswordMinAggregateOutputType | null
    _max: RecoveryPasswordMaxAggregateOutputType | null
  }

  type GetRecoveryPasswordGroupByPayload<T extends RecoveryPasswordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecoveryPasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecoveryPasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecoveryPasswordGroupByOutputType[P]>
            : GetScalarType<T[P], RecoveryPasswordGroupByOutputType[P]>
        }
      >
    >


  export type RecoveryPasswordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recoveryPasswordId?: boolean
    code?: boolean
    email?: boolean
  }, ExtArgs["result"]["recoveryPassword"]>

  export type RecoveryPasswordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recoveryPasswordId?: boolean
    code?: boolean
    email?: boolean
  }, ExtArgs["result"]["recoveryPassword"]>

  export type RecoveryPasswordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recoveryPasswordId?: boolean
    code?: boolean
    email?: boolean
  }, ExtArgs["result"]["recoveryPassword"]>

  export type RecoveryPasswordSelectScalar = {
    recoveryPasswordId?: boolean
    code?: boolean
    email?: boolean
  }

  export type RecoveryPasswordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recoveryPasswordId" | "code" | "email", ExtArgs["result"]["recoveryPassword"]>

  export type $RecoveryPasswordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecoveryPassword"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      recoveryPasswordId: string
      code: string
      email: string
    }, ExtArgs["result"]["recoveryPassword"]>
    composites: {}
  }

  type RecoveryPasswordGetPayload<S extends boolean | null | undefined | RecoveryPasswordDefaultArgs> = $Result.GetResult<Prisma.$RecoveryPasswordPayload, S>

  type RecoveryPasswordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecoveryPasswordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecoveryPasswordCountAggregateInputType | true
    }

  export interface RecoveryPasswordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecoveryPassword'], meta: { name: 'RecoveryPassword' } }
    /**
     * Find zero or one RecoveryPassword that matches the filter.
     * @param {RecoveryPasswordFindUniqueArgs} args - Arguments to find a RecoveryPassword
     * @example
     * // Get one RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecoveryPasswordFindUniqueArgs>(args: SelectSubset<T, RecoveryPasswordFindUniqueArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecoveryPassword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecoveryPasswordFindUniqueOrThrowArgs} args - Arguments to find a RecoveryPassword
     * @example
     * // Get one RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecoveryPasswordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecoveryPasswordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryPassword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordFindFirstArgs} args - Arguments to find a RecoveryPassword
     * @example
     * // Get one RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecoveryPasswordFindFirstArgs>(args?: SelectSubset<T, RecoveryPasswordFindFirstArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryPassword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordFindFirstOrThrowArgs} args - Arguments to find a RecoveryPassword
     * @example
     * // Get one RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecoveryPasswordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecoveryPasswordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecoveryPasswords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecoveryPasswords
     * const recoveryPasswords = await prisma.recoveryPassword.findMany()
     * 
     * // Get first 10 RecoveryPasswords
     * const recoveryPasswords = await prisma.recoveryPassword.findMany({ take: 10 })
     * 
     * // Only select the `recoveryPasswordId`
     * const recoveryPasswordWithRecoveryPasswordIdOnly = await prisma.recoveryPassword.findMany({ select: { recoveryPasswordId: true } })
     * 
     */
    findMany<T extends RecoveryPasswordFindManyArgs>(args?: SelectSubset<T, RecoveryPasswordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecoveryPassword.
     * @param {RecoveryPasswordCreateArgs} args - Arguments to create a RecoveryPassword.
     * @example
     * // Create one RecoveryPassword
     * const RecoveryPassword = await prisma.recoveryPassword.create({
     *   data: {
     *     // ... data to create a RecoveryPassword
     *   }
     * })
     * 
     */
    create<T extends RecoveryPasswordCreateArgs>(args: SelectSubset<T, RecoveryPasswordCreateArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecoveryPasswords.
     * @param {RecoveryPasswordCreateManyArgs} args - Arguments to create many RecoveryPasswords.
     * @example
     * // Create many RecoveryPasswords
     * const recoveryPassword = await prisma.recoveryPassword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecoveryPasswordCreateManyArgs>(args?: SelectSubset<T, RecoveryPasswordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecoveryPasswords and returns the data saved in the database.
     * @param {RecoveryPasswordCreateManyAndReturnArgs} args - Arguments to create many RecoveryPasswords.
     * @example
     * // Create many RecoveryPasswords
     * const recoveryPassword = await prisma.recoveryPassword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecoveryPasswords and only return the `recoveryPasswordId`
     * const recoveryPasswordWithRecoveryPasswordIdOnly = await prisma.recoveryPassword.createManyAndReturn({
     *   select: { recoveryPasswordId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecoveryPasswordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecoveryPasswordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecoveryPassword.
     * @param {RecoveryPasswordDeleteArgs} args - Arguments to delete one RecoveryPassword.
     * @example
     * // Delete one RecoveryPassword
     * const RecoveryPassword = await prisma.recoveryPassword.delete({
     *   where: {
     *     // ... filter to delete one RecoveryPassword
     *   }
     * })
     * 
     */
    delete<T extends RecoveryPasswordDeleteArgs>(args: SelectSubset<T, RecoveryPasswordDeleteArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecoveryPassword.
     * @param {RecoveryPasswordUpdateArgs} args - Arguments to update one RecoveryPassword.
     * @example
     * // Update one RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecoveryPasswordUpdateArgs>(args: SelectSubset<T, RecoveryPasswordUpdateArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecoveryPasswords.
     * @param {RecoveryPasswordDeleteManyArgs} args - Arguments to filter RecoveryPasswords to delete.
     * @example
     * // Delete a few RecoveryPasswords
     * const { count } = await prisma.recoveryPassword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecoveryPasswordDeleteManyArgs>(args?: SelectSubset<T, RecoveryPasswordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecoveryPasswords
     * const recoveryPassword = await prisma.recoveryPassword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecoveryPasswordUpdateManyArgs>(args: SelectSubset<T, RecoveryPasswordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryPasswords and returns the data updated in the database.
     * @param {RecoveryPasswordUpdateManyAndReturnArgs} args - Arguments to update many RecoveryPasswords.
     * @example
     * // Update many RecoveryPasswords
     * const recoveryPassword = await prisma.recoveryPassword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecoveryPasswords and only return the `recoveryPasswordId`
     * const recoveryPasswordWithRecoveryPasswordIdOnly = await prisma.recoveryPassword.updateManyAndReturn({
     *   select: { recoveryPasswordId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecoveryPasswordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecoveryPasswordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecoveryPassword.
     * @param {RecoveryPasswordUpsertArgs} args - Arguments to update or create a RecoveryPassword.
     * @example
     * // Update or create a RecoveryPassword
     * const recoveryPassword = await prisma.recoveryPassword.upsert({
     *   create: {
     *     // ... data to create a RecoveryPassword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecoveryPassword we want to update
     *   }
     * })
     */
    upsert<T extends RecoveryPasswordUpsertArgs>(args: SelectSubset<T, RecoveryPasswordUpsertArgs<ExtArgs>>): Prisma__RecoveryPasswordClient<$Result.GetResult<Prisma.$RecoveryPasswordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecoveryPasswords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordCountArgs} args - Arguments to filter RecoveryPasswords to count.
     * @example
     * // Count the number of RecoveryPasswords
     * const count = await prisma.recoveryPassword.count({
     *   where: {
     *     // ... the filter for the RecoveryPasswords we want to count
     *   }
     * })
    **/
    count<T extends RecoveryPasswordCountArgs>(
      args?: Subset<T, RecoveryPasswordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecoveryPasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecoveryPassword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecoveryPasswordAggregateArgs>(args: Subset<T, RecoveryPasswordAggregateArgs>): Prisma.PrismaPromise<GetRecoveryPasswordAggregateType<T>>

    /**
     * Group by RecoveryPassword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryPasswordGroupByArgs} args - Group by arguments.
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
      T extends RecoveryPasswordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecoveryPasswordGroupByArgs['orderBy'] }
        : { orderBy?: RecoveryPasswordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecoveryPasswordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecoveryPassword model
   */
  readonly fields: RecoveryPasswordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecoveryPassword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecoveryPasswordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecoveryPassword model
   */ 
  interface RecoveryPasswordFieldRefs {
    readonly recoveryPasswordId: FieldRef<"RecoveryPassword", 'String'>
    readonly code: FieldRef<"RecoveryPassword", 'String'>
    readonly email: FieldRef<"RecoveryPassword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecoveryPassword findUnique
   */
  export type RecoveryPasswordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter, which RecoveryPassword to fetch.
     */
    where: RecoveryPasswordWhereUniqueInput
  }

  /**
   * RecoveryPassword findUniqueOrThrow
   */
  export type RecoveryPasswordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter, which RecoveryPassword to fetch.
     */
    where: RecoveryPasswordWhereUniqueInput
  }

  /**
   * RecoveryPassword findFirst
   */
  export type RecoveryPasswordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter, which RecoveryPassword to fetch.
     */
    where?: RecoveryPasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswords to fetch.
     */
    orderBy?: RecoveryPasswordOrderByWithRelationInput | RecoveryPasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryPasswords.
     */
    cursor?: RecoveryPasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryPasswords.
     */
    distinct?: RecoveryPasswordScalarFieldEnum | RecoveryPasswordScalarFieldEnum[]
  }

  /**
   * RecoveryPassword findFirstOrThrow
   */
  export type RecoveryPasswordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter, which RecoveryPassword to fetch.
     */
    where?: RecoveryPasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswords to fetch.
     */
    orderBy?: RecoveryPasswordOrderByWithRelationInput | RecoveryPasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryPasswords.
     */
    cursor?: RecoveryPasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryPasswords.
     */
    distinct?: RecoveryPasswordScalarFieldEnum | RecoveryPasswordScalarFieldEnum[]
  }

  /**
   * RecoveryPassword findMany
   */
  export type RecoveryPasswordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter, which RecoveryPasswords to fetch.
     */
    where?: RecoveryPasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryPasswords to fetch.
     */
    orderBy?: RecoveryPasswordOrderByWithRelationInput | RecoveryPasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecoveryPasswords.
     */
    cursor?: RecoveryPasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryPasswords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryPasswords.
     */
    skip?: number
    distinct?: RecoveryPasswordScalarFieldEnum | RecoveryPasswordScalarFieldEnum[]
  }

  /**
   * RecoveryPassword create
   */
  export type RecoveryPasswordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * The data needed to create a RecoveryPassword.
     */
    data: XOR<RecoveryPasswordCreateInput, RecoveryPasswordUncheckedCreateInput>
  }

  /**
   * RecoveryPassword createMany
   */
  export type RecoveryPasswordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecoveryPasswords.
     */
    data: RecoveryPasswordCreateManyInput | RecoveryPasswordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecoveryPassword createManyAndReturn
   */
  export type RecoveryPasswordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * The data used to create many RecoveryPasswords.
     */
    data: RecoveryPasswordCreateManyInput | RecoveryPasswordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecoveryPassword update
   */
  export type RecoveryPasswordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * The data needed to update a RecoveryPassword.
     */
    data: XOR<RecoveryPasswordUpdateInput, RecoveryPasswordUncheckedUpdateInput>
    /**
     * Choose, which RecoveryPassword to update.
     */
    where: RecoveryPasswordWhereUniqueInput
  }

  /**
   * RecoveryPassword updateMany
   */
  export type RecoveryPasswordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecoveryPasswords.
     */
    data: XOR<RecoveryPasswordUpdateManyMutationInput, RecoveryPasswordUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryPasswords to update
     */
    where?: RecoveryPasswordWhereInput
    /**
     * Limit how many RecoveryPasswords to update.
     */
    limit?: number
  }

  /**
   * RecoveryPassword updateManyAndReturn
   */
  export type RecoveryPasswordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * The data used to update RecoveryPasswords.
     */
    data: XOR<RecoveryPasswordUpdateManyMutationInput, RecoveryPasswordUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryPasswords to update
     */
    where?: RecoveryPasswordWhereInput
    /**
     * Limit how many RecoveryPasswords to update.
     */
    limit?: number
  }

  /**
   * RecoveryPassword upsert
   */
  export type RecoveryPasswordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * The filter to search for the RecoveryPassword to update in case it exists.
     */
    where: RecoveryPasswordWhereUniqueInput
    /**
     * In case the RecoveryPassword found by the `where` argument doesn't exist, create a new RecoveryPassword with this data.
     */
    create: XOR<RecoveryPasswordCreateInput, RecoveryPasswordUncheckedCreateInput>
    /**
     * In case the RecoveryPassword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecoveryPasswordUpdateInput, RecoveryPasswordUncheckedUpdateInput>
  }

  /**
   * RecoveryPassword delete
   */
  export type RecoveryPasswordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
    /**
     * Filter which RecoveryPassword to delete.
     */
    where: RecoveryPasswordWhereUniqueInput
  }

  /**
   * RecoveryPassword deleteMany
   */
  export type RecoveryPasswordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryPasswords to delete
     */
    where?: RecoveryPasswordWhereInput
    /**
     * Limit how many RecoveryPasswords to delete.
     */
    limit?: number
  }

  /**
   * RecoveryPassword without action
   */
  export type RecoveryPasswordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryPassword
     */
    select?: RecoveryPasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryPassword
     */
    omit?: RecoveryPasswordOmit<ExtArgs> | null
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
    userId: 'userId',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    agreeToTerms: 'agreeToTerms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    accountId: 'accountId',
    userId: 'userId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const GithubUserScalarFieldEnum: {
    githubId: 'githubId',
    username: 'username',
    email: 'email',
    accountId: 'accountId'
  };

  export type GithubUserScalarFieldEnum = (typeof GithubUserScalarFieldEnum)[keyof typeof GithubUserScalarFieldEnum]


  export const GoogleUserScalarFieldEnum: {
    googleId: 'googleId',
    username: 'username',
    email: 'email',
    avatar: 'avatar',
    accountId: 'accountId'
  };

  export type GoogleUserScalarFieldEnum = (typeof GoogleUserScalarFieldEnum)[keyof typeof GoogleUserScalarFieldEnum]


  export const EmailConfirmationScalarFieldEnum: {
    id: 'id',
    confirmationCode: 'confirmationCode',
    expirationDate: 'expirationDate',
    isConfirmed: 'isConfirmed',
    userId: 'userId'
  };

  export type EmailConfirmationScalarFieldEnum = (typeof EmailConfirmationScalarFieldEnum)[keyof typeof EmailConfirmationScalarFieldEnum]


  export const DeviceSessionsScalarFieldEnum: {
    deviceId: 'deviceId',
    ip: 'ip',
    lastActiveDate: 'lastActiveDate',
    title: 'title',
    userId: 'userId'
  };

  export type DeviceSessionsScalarFieldEnum = (typeof DeviceSessionsScalarFieldEnum)[keyof typeof DeviceSessionsScalarFieldEnum]


  export const RecoveryPasswordScalarFieldEnum: {
    recoveryPasswordId: 'recoveryPasswordId',
    code: 'code',
    email: 'email'
  };

  export type RecoveryPasswordScalarFieldEnum = (typeof RecoveryPasswordScalarFieldEnum)[keyof typeof RecoveryPasswordScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    agreeToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailConfirmation?: XOR<EmailConfirmationNullableScalarRelationFilter, EmailConfirmationWhereInput> | null
    sessions?: DeviceSessionsListRelationFilter
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailConfirmation?: EmailConfirmationOrderByWithRelationInput
    sessions?: DeviceSessionsOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    agreeToTerms?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailConfirmation?: XOR<EmailConfirmationNullableScalarRelationFilter, EmailConfirmationWhereInput> | null
    sessions?: DeviceSessionsListRelationFilter
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "userId" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    agreeToTerms?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    userId?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    GithubUser?: XOR<GithubUserNullableScalarRelationFilter, GithubUserWhereInput> | null
    GooglebUser?: XOR<GoogleUserNullableScalarRelationFilter, GoogleUserWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    accountId?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    GithubUser?: GithubUserOrderByWithRelationInput
    GooglebUser?: GoogleUserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    accountId?: string
    userId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    GithubUser?: XOR<GithubUserNullableScalarRelationFilter, GithubUserWhereInput> | null
    GooglebUser?: XOR<GoogleUserNullableScalarRelationFilter, GoogleUserWhereInput> | null
  }, "accountId" | "userId">

  export type AccountOrderByWithAggregationInput = {
    accountId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    accountId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type GithubUserWhereInput = {
    AND?: GithubUserWhereInput | GithubUserWhereInput[]
    OR?: GithubUserWhereInput[]
    NOT?: GithubUserWhereInput | GithubUserWhereInput[]
    githubId?: StringFilter<"GithubUser"> | string
    username?: StringFilter<"GithubUser"> | string
    email?: StringFilter<"GithubUser"> | string
    accountId?: StringFilter<"GithubUser"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type GithubUserOrderByWithRelationInput = {
    githubId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type GithubUserWhereUniqueInput = Prisma.AtLeast<{
    githubId?: string
    email?: string
    accountId?: string
    AND?: GithubUserWhereInput | GithubUserWhereInput[]
    OR?: GithubUserWhereInput[]
    NOT?: GithubUserWhereInput | GithubUserWhereInput[]
    username?: StringFilter<"GithubUser"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "githubId" | "email" | "accountId">

  export type GithubUserOrderByWithAggregationInput = {
    githubId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
    _count?: GithubUserCountOrderByAggregateInput
    _max?: GithubUserMaxOrderByAggregateInput
    _min?: GithubUserMinOrderByAggregateInput
  }

  export type GithubUserScalarWhereWithAggregatesInput = {
    AND?: GithubUserScalarWhereWithAggregatesInput | GithubUserScalarWhereWithAggregatesInput[]
    OR?: GithubUserScalarWhereWithAggregatesInput[]
    NOT?: GithubUserScalarWhereWithAggregatesInput | GithubUserScalarWhereWithAggregatesInput[]
    githubId?: StringWithAggregatesFilter<"GithubUser"> | string
    username?: StringWithAggregatesFilter<"GithubUser"> | string
    email?: StringWithAggregatesFilter<"GithubUser"> | string
    accountId?: StringWithAggregatesFilter<"GithubUser"> | string
  }

  export type GoogleUserWhereInput = {
    AND?: GoogleUserWhereInput | GoogleUserWhereInput[]
    OR?: GoogleUserWhereInput[]
    NOT?: GoogleUserWhereInput | GoogleUserWhereInput[]
    googleId?: StringFilter<"GoogleUser"> | string
    username?: StringFilter<"GoogleUser"> | string
    email?: StringFilter<"GoogleUser"> | string
    avatar?: StringFilter<"GoogleUser"> | string
    accountId?: StringFilter<"GoogleUser"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type GoogleUserOrderByWithRelationInput = {
    googleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type GoogleUserWhereUniqueInput = Prisma.AtLeast<{
    googleId?: string
    email?: string
    accountId?: string
    AND?: GoogleUserWhereInput | GoogleUserWhereInput[]
    OR?: GoogleUserWhereInput[]
    NOT?: GoogleUserWhereInput | GoogleUserWhereInput[]
    username?: StringFilter<"GoogleUser"> | string
    avatar?: StringFilter<"GoogleUser"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "googleId" | "email" | "accountId">

  export type GoogleUserOrderByWithAggregationInput = {
    googleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    accountId?: SortOrder
    _count?: GoogleUserCountOrderByAggregateInput
    _max?: GoogleUserMaxOrderByAggregateInput
    _min?: GoogleUserMinOrderByAggregateInput
  }

  export type GoogleUserScalarWhereWithAggregatesInput = {
    AND?: GoogleUserScalarWhereWithAggregatesInput | GoogleUserScalarWhereWithAggregatesInput[]
    OR?: GoogleUserScalarWhereWithAggregatesInput[]
    NOT?: GoogleUserScalarWhereWithAggregatesInput | GoogleUserScalarWhereWithAggregatesInput[]
    googleId?: StringWithAggregatesFilter<"GoogleUser"> | string
    username?: StringWithAggregatesFilter<"GoogleUser"> | string
    email?: StringWithAggregatesFilter<"GoogleUser"> | string
    avatar?: StringWithAggregatesFilter<"GoogleUser"> | string
    accountId?: StringWithAggregatesFilter<"GoogleUser"> | string
  }

  export type EmailConfirmationWhereInput = {
    AND?: EmailConfirmationWhereInput | EmailConfirmationWhereInput[]
    OR?: EmailConfirmationWhereInput[]
    NOT?: EmailConfirmationWhereInput | EmailConfirmationWhereInput[]
    id?: StringFilter<"EmailConfirmation"> | string
    confirmationCode?: StringFilter<"EmailConfirmation"> | string
    expirationDate?: DateTimeFilter<"EmailConfirmation"> | Date | string
    isConfirmed?: BoolFilter<"EmailConfirmation"> | boolean
    userId?: StringFilter<"EmailConfirmation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    confirmationCode?: SortOrder
    expirationDate?: SortOrder
    isConfirmed?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: EmailConfirmationWhereInput | EmailConfirmationWhereInput[]
    OR?: EmailConfirmationWhereInput[]
    NOT?: EmailConfirmationWhereInput | EmailConfirmationWhereInput[]
    confirmationCode?: StringFilter<"EmailConfirmation"> | string
    expirationDate?: DateTimeFilter<"EmailConfirmation"> | Date | string
    isConfirmed?: BoolFilter<"EmailConfirmation"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type EmailConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    confirmationCode?: SortOrder
    expirationDate?: SortOrder
    isConfirmed?: SortOrder
    userId?: SortOrder
    _count?: EmailConfirmationCountOrderByAggregateInput
    _max?: EmailConfirmationMaxOrderByAggregateInput
    _min?: EmailConfirmationMinOrderByAggregateInput
  }

  export type EmailConfirmationScalarWhereWithAggregatesInput = {
    AND?: EmailConfirmationScalarWhereWithAggregatesInput | EmailConfirmationScalarWhereWithAggregatesInput[]
    OR?: EmailConfirmationScalarWhereWithAggregatesInput[]
    NOT?: EmailConfirmationScalarWhereWithAggregatesInput | EmailConfirmationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailConfirmation"> | string
    confirmationCode?: StringWithAggregatesFilter<"EmailConfirmation"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"EmailConfirmation"> | Date | string
    isConfirmed?: BoolWithAggregatesFilter<"EmailConfirmation"> | boolean
    userId?: StringWithAggregatesFilter<"EmailConfirmation"> | string
  }

  export type DeviceSessionsWhereInput = {
    AND?: DeviceSessionsWhereInput | DeviceSessionsWhereInput[]
    OR?: DeviceSessionsWhereInput[]
    NOT?: DeviceSessionsWhereInput | DeviceSessionsWhereInput[]
    deviceId?: StringFilter<"DeviceSessions"> | string
    ip?: StringFilter<"DeviceSessions"> | string
    lastActiveDate?: StringFilter<"DeviceSessions"> | string
    title?: StringFilter<"DeviceSessions"> | string
    userId?: StringNullableFilter<"DeviceSessions"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DeviceSessionsOrderByWithRelationInput = {
    deviceId?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    title?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceSessionsWhereUniqueInput = Prisma.AtLeast<{
    deviceId?: string
    AND?: DeviceSessionsWhereInput | DeviceSessionsWhereInput[]
    OR?: DeviceSessionsWhereInput[]
    NOT?: DeviceSessionsWhereInput | DeviceSessionsWhereInput[]
    ip?: StringFilter<"DeviceSessions"> | string
    lastActiveDate?: StringFilter<"DeviceSessions"> | string
    title?: StringFilter<"DeviceSessions"> | string
    userId?: StringNullableFilter<"DeviceSessions"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "deviceId">

  export type DeviceSessionsOrderByWithAggregationInput = {
    deviceId?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    title?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DeviceSessionsCountOrderByAggregateInput
    _max?: DeviceSessionsMaxOrderByAggregateInput
    _min?: DeviceSessionsMinOrderByAggregateInput
  }

  export type DeviceSessionsScalarWhereWithAggregatesInput = {
    AND?: DeviceSessionsScalarWhereWithAggregatesInput | DeviceSessionsScalarWhereWithAggregatesInput[]
    OR?: DeviceSessionsScalarWhereWithAggregatesInput[]
    NOT?: DeviceSessionsScalarWhereWithAggregatesInput | DeviceSessionsScalarWhereWithAggregatesInput[]
    deviceId?: StringWithAggregatesFilter<"DeviceSessions"> | string
    ip?: StringWithAggregatesFilter<"DeviceSessions"> | string
    lastActiveDate?: StringWithAggregatesFilter<"DeviceSessions"> | string
    title?: StringWithAggregatesFilter<"DeviceSessions"> | string
    userId?: StringNullableWithAggregatesFilter<"DeviceSessions"> | string | null
  }

  export type RecoveryPasswordWhereInput = {
    AND?: RecoveryPasswordWhereInput | RecoveryPasswordWhereInput[]
    OR?: RecoveryPasswordWhereInput[]
    NOT?: RecoveryPasswordWhereInput | RecoveryPasswordWhereInput[]
    recoveryPasswordId?: StringFilter<"RecoveryPassword"> | string
    code?: StringFilter<"RecoveryPassword"> | string
    email?: StringFilter<"RecoveryPassword"> | string
  }

  export type RecoveryPasswordOrderByWithRelationInput = {
    recoveryPasswordId?: SortOrder
    code?: SortOrder
    email?: SortOrder
  }

  export type RecoveryPasswordWhereUniqueInput = Prisma.AtLeast<{
    recoveryPasswordId?: string
    AND?: RecoveryPasswordWhereInput | RecoveryPasswordWhereInput[]
    OR?: RecoveryPasswordWhereInput[]
    NOT?: RecoveryPasswordWhereInput | RecoveryPasswordWhereInput[]
    code?: StringFilter<"RecoveryPassword"> | string
    email?: StringFilter<"RecoveryPassword"> | string
  }, "recoveryPasswordId">

  export type RecoveryPasswordOrderByWithAggregationInput = {
    recoveryPasswordId?: SortOrder
    code?: SortOrder
    email?: SortOrder
    _count?: RecoveryPasswordCountOrderByAggregateInput
    _max?: RecoveryPasswordMaxOrderByAggregateInput
    _min?: RecoveryPasswordMinOrderByAggregateInput
  }

  export type RecoveryPasswordScalarWhereWithAggregatesInput = {
    AND?: RecoveryPasswordScalarWhereWithAggregatesInput | RecoveryPasswordScalarWhereWithAggregatesInput[]
    OR?: RecoveryPasswordScalarWhereWithAggregatesInput[]
    NOT?: RecoveryPasswordScalarWhereWithAggregatesInput | RecoveryPasswordScalarWhereWithAggregatesInput[]
    recoveryPasswordId?: StringWithAggregatesFilter<"RecoveryPassword"> | string
    code?: StringWithAggregatesFilter<"RecoveryPassword"> | string
    email?: StringWithAggregatesFilter<"RecoveryPassword"> | string
  }

  export type UserCreateInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationCreateNestedOneWithoutUserInput
    sessions?: DeviceSessionsCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationUncheckedCreateNestedOneWithoutUserInput
    sessions?: DeviceSessionsUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUpdateOneWithoutUserNestedInput
    sessions?: DeviceSessionsUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUncheckedUpdateOneWithoutUserNestedInput
    sessions?: DeviceSessionsUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    accountId?: string
    user?: UserCreateNestedOneWithoutAccountInput
    GithubUser?: GithubUserCreateNestedOneWithoutAccountInput
    GooglebUser?: GoogleUserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    accountId?: string
    userId?: string | null
    GithubUser?: GithubUserUncheckedCreateNestedOneWithoutAccountInput
    GooglebUser?: GoogleUserUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutAccountNestedInput
    GithubUser?: GithubUserUpdateOneWithoutAccountNestedInput
    GooglebUser?: GoogleUserUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    GithubUser?: GithubUserUncheckedUpdateOneWithoutAccountNestedInput
    GooglebUser?: GoogleUserUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    accountId?: string
    userId?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GithubUserCreateInput = {
    githubId: string
    username: string
    email: string
    account: AccountCreateNestedOneWithoutGithubUserInput
  }

  export type GithubUserUncheckedCreateInput = {
    githubId: string
    username: string
    email: string
    accountId: string
  }

  export type GithubUserUpdateInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutGithubUserNestedInput
  }

  export type GithubUserUncheckedUpdateInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type GithubUserCreateManyInput = {
    githubId: string
    username: string
    email: string
    accountId: string
  }

  export type GithubUserUpdateManyMutationInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GithubUserUncheckedUpdateManyInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type GoogleUserCreateInput = {
    googleId: string
    username: string
    email: string
    avatar: string
    account: AccountCreateNestedOneWithoutGooglebUserInput
  }

  export type GoogleUserUncheckedCreateInput = {
    googleId: string
    username: string
    email: string
    avatar: string
    accountId: string
  }

  export type GoogleUserUpdateInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutGooglebUserNestedInput
  }

  export type GoogleUserUncheckedUpdateInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type GoogleUserCreateManyInput = {
    googleId: string
    username: string
    email: string
    avatar: string
    accountId: string
  }

  export type GoogleUserUpdateManyMutationInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type GoogleUserUncheckedUpdateManyInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailConfirmationCreateInput = {
    id?: string
    confirmationCode: string
    expirationDate: Date | string
    isConfirmed?: boolean
    user: UserCreateNestedOneWithoutEmailConfirmationInput
  }

  export type EmailConfirmationUncheckedCreateInput = {
    id?: string
    confirmationCode: string
    expirationDate: Date | string
    isConfirmed?: boolean
    userId: string
  }

  export type EmailConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutEmailConfirmationNestedInput
  }

  export type EmailConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailConfirmationCreateManyInput = {
    id?: string
    confirmationCode: string
    expirationDate: Date | string
    isConfirmed?: boolean
    userId: string
  }

  export type EmailConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionsCreateInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
    user?: UserCreateNestedOneWithoutSessionsInput
  }

  export type DeviceSessionsUncheckedCreateInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
    userId?: string | null
  }

  export type DeviceSessionsUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSessionsNestedInput
  }

  export type DeviceSessionsUncheckedUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceSessionsCreateManyInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
    userId?: string | null
  }

  export type DeviceSessionsUpdateManyMutationInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionsUncheckedUpdateManyInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecoveryPasswordCreateInput = {
    recoveryPasswordId?: string
    code: string
    email: string
  }

  export type RecoveryPasswordUncheckedCreateInput = {
    recoveryPasswordId?: string
    code: string
    email: string
  }

  export type RecoveryPasswordUpdateInput = {
    recoveryPasswordId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type RecoveryPasswordUncheckedUpdateInput = {
    recoveryPasswordId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type RecoveryPasswordCreateManyInput = {
    recoveryPasswordId?: string
    code: string
    email: string
  }

  export type RecoveryPasswordUpdateManyMutationInput = {
    recoveryPasswordId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type RecoveryPasswordUncheckedUpdateManyInput = {
    recoveryPasswordId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EmailConfirmationNullableScalarRelationFilter = {
    is?: EmailConfirmationWhereInput | null
    isNot?: EmailConfirmationWhereInput | null
  }

  export type DeviceSessionsListRelationFilter = {
    every?: DeviceSessionsWhereInput
    some?: DeviceSessionsWhereInput
    none?: DeviceSessionsWhereInput
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type DeviceSessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agreeToTerms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GithubUserNullableScalarRelationFilter = {
    is?: GithubUserWhereInput | null
    isNot?: GithubUserWhereInput | null
  }

  export type GoogleUserNullableScalarRelationFilter = {
    is?: GoogleUserWhereInput | null
    isNot?: GoogleUserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountCountOrderByAggregateInput = {
    accountId?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    accountId?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    accountId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type GithubUserCountOrderByAggregateInput = {
    githubId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
  }

  export type GithubUserMaxOrderByAggregateInput = {
    githubId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
  }

  export type GithubUserMinOrderByAggregateInput = {
    githubId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accountId?: SortOrder
  }

  export type GoogleUserCountOrderByAggregateInput = {
    googleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    accountId?: SortOrder
  }

  export type GoogleUserMaxOrderByAggregateInput = {
    googleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    accountId?: SortOrder
  }

  export type GoogleUserMinOrderByAggregateInput = {
    googleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    accountId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    confirmationCode?: SortOrder
    expirationDate?: SortOrder
    isConfirmed?: SortOrder
    userId?: SortOrder
  }

  export type EmailConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    confirmationCode?: SortOrder
    expirationDate?: SortOrder
    isConfirmed?: SortOrder
    userId?: SortOrder
  }

  export type EmailConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    confirmationCode?: SortOrder
    expirationDate?: SortOrder
    isConfirmed?: SortOrder
    userId?: SortOrder
  }

  export type DeviceSessionsCountOrderByAggregateInput = {
    deviceId?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type DeviceSessionsMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type DeviceSessionsMinOrderByAggregateInput = {
    deviceId?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type RecoveryPasswordCountOrderByAggregateInput = {
    recoveryPasswordId?: SortOrder
    code?: SortOrder
    email?: SortOrder
  }

  export type RecoveryPasswordMaxOrderByAggregateInput = {
    recoveryPasswordId?: SortOrder
    code?: SortOrder
    email?: SortOrder
  }

  export type RecoveryPasswordMinOrderByAggregateInput = {
    recoveryPasswordId?: SortOrder
    code?: SortOrder
    email?: SortOrder
  }

  export type EmailConfirmationCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailConfirmationCreateOrConnectWithoutUserInput
    connect?: EmailConfirmationWhereUniqueInput
  }

  export type DeviceSessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput> | DeviceSessionsCreateWithoutUserInput[] | DeviceSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionsCreateOrConnectWithoutUserInput | DeviceSessionsCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionsCreateManyUserInputEnvelope
    connect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type EmailConfirmationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailConfirmationCreateOrConnectWithoutUserInput
    connect?: EmailConfirmationWhereUniqueInput
  }

  export type DeviceSessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput> | DeviceSessionsCreateWithoutUserInput[] | DeviceSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionsCreateOrConnectWithoutUserInput | DeviceSessionsCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionsCreateManyUserInputEnvelope
    connect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailConfirmationUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailConfirmationCreateOrConnectWithoutUserInput
    upsert?: EmailConfirmationUpsertWithoutUserInput
    disconnect?: EmailConfirmationWhereInput | boolean
    delete?: EmailConfirmationWhereInput | boolean
    connect?: EmailConfirmationWhereUniqueInput
    update?: XOR<XOR<EmailConfirmationUpdateToOneWithWhereWithoutUserInput, EmailConfirmationUpdateWithoutUserInput>, EmailConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type DeviceSessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput> | DeviceSessionsCreateWithoutUserInput[] | DeviceSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionsCreateOrConnectWithoutUserInput | DeviceSessionsCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionsUpsertWithWhereUniqueWithoutUserInput | DeviceSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionsCreateManyUserInputEnvelope
    set?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    disconnect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    delete?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    connect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    update?: DeviceSessionsUpdateWithWhereUniqueWithoutUserInput | DeviceSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionsUpdateManyWithWhereWithoutUserInput | DeviceSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionsScalarWhereInput | DeviceSessionsScalarWhereInput[]
  }

  export type AccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type EmailConfirmationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailConfirmationCreateOrConnectWithoutUserInput
    upsert?: EmailConfirmationUpsertWithoutUserInput
    disconnect?: EmailConfirmationWhereInput | boolean
    delete?: EmailConfirmationWhereInput | boolean
    connect?: EmailConfirmationWhereUniqueInput
    update?: XOR<XOR<EmailConfirmationUpdateToOneWithWhereWithoutUserInput, EmailConfirmationUpdateWithoutUserInput>, EmailConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type DeviceSessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput> | DeviceSessionsCreateWithoutUserInput[] | DeviceSessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionsCreateOrConnectWithoutUserInput | DeviceSessionsCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionsUpsertWithWhereUniqueWithoutUserInput | DeviceSessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionsCreateManyUserInputEnvelope
    set?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    disconnect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    delete?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    connect?: DeviceSessionsWhereUniqueInput | DeviceSessionsWhereUniqueInput[]
    update?: DeviceSessionsUpdateWithWhereUniqueWithoutUserInput | DeviceSessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionsUpdateManyWithWhereWithoutUserInput | DeviceSessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionsScalarWhereInput | DeviceSessionsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type GithubUserCreateNestedOneWithoutAccountInput = {
    create?: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GithubUserCreateOrConnectWithoutAccountInput
    connect?: GithubUserWhereUniqueInput
  }

  export type GoogleUserCreateNestedOneWithoutAccountInput = {
    create?: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GoogleUserCreateOrConnectWithoutAccountInput
    connect?: GoogleUserWhereUniqueInput
  }

  export type GithubUserUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GithubUserCreateOrConnectWithoutAccountInput
    connect?: GithubUserWhereUniqueInput
  }

  export type GoogleUserUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GoogleUserCreateOrConnectWithoutAccountInput
    connect?: GoogleUserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type GithubUserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GithubUserCreateOrConnectWithoutAccountInput
    upsert?: GithubUserUpsertWithoutAccountInput
    disconnect?: GithubUserWhereInput | boolean
    delete?: GithubUserWhereInput | boolean
    connect?: GithubUserWhereUniqueInput
    update?: XOR<XOR<GithubUserUpdateToOneWithWhereWithoutAccountInput, GithubUserUpdateWithoutAccountInput>, GithubUserUncheckedUpdateWithoutAccountInput>
  }

  export type GoogleUserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GoogleUserCreateOrConnectWithoutAccountInput
    upsert?: GoogleUserUpsertWithoutAccountInput
    disconnect?: GoogleUserWhereInput | boolean
    delete?: GoogleUserWhereInput | boolean
    connect?: GoogleUserWhereUniqueInput
    update?: XOR<XOR<GoogleUserUpdateToOneWithWhereWithoutAccountInput, GoogleUserUpdateWithoutAccountInput>, GoogleUserUncheckedUpdateWithoutAccountInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GithubUserUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GithubUserCreateOrConnectWithoutAccountInput
    upsert?: GithubUserUpsertWithoutAccountInput
    disconnect?: GithubUserWhereInput | boolean
    delete?: GithubUserWhereInput | boolean
    connect?: GithubUserWhereUniqueInput
    update?: XOR<XOR<GithubUserUpdateToOneWithWhereWithoutAccountInput, GithubUserUpdateWithoutAccountInput>, GithubUserUncheckedUpdateWithoutAccountInput>
  }

  export type GoogleUserUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: GoogleUserCreateOrConnectWithoutAccountInput
    upsert?: GoogleUserUpsertWithoutAccountInput
    disconnect?: GoogleUserWhereInput | boolean
    delete?: GoogleUserWhereInput | boolean
    connect?: GoogleUserWhereUniqueInput
    update?: XOR<XOR<GoogleUserUpdateToOneWithWhereWithoutAccountInput, GoogleUserUpdateWithoutAccountInput>, GoogleUserUncheckedUpdateWithoutAccountInput>
  }

  export type AccountCreateNestedOneWithoutGithubUserInput = {
    create?: XOR<AccountCreateWithoutGithubUserInput, AccountUncheckedCreateWithoutGithubUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGithubUserInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutGithubUserNestedInput = {
    create?: XOR<AccountCreateWithoutGithubUserInput, AccountUncheckedCreateWithoutGithubUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGithubUserInput
    upsert?: AccountUpsertWithoutGithubUserInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutGithubUserInput, AccountUpdateWithoutGithubUserInput>, AccountUncheckedUpdateWithoutGithubUserInput>
  }

  export type AccountCreateNestedOneWithoutGooglebUserInput = {
    create?: XOR<AccountCreateWithoutGooglebUserInput, AccountUncheckedCreateWithoutGooglebUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGooglebUserInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutGooglebUserNestedInput = {
    create?: XOR<AccountCreateWithoutGooglebUserInput, AccountUncheckedCreateWithoutGooglebUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGooglebUserInput
    upsert?: AccountUpsertWithoutGooglebUserInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutGooglebUserInput, AccountUpdateWithoutGooglebUserInput>, AccountUncheckedUpdateWithoutGooglebUserInput>
  }

  export type UserCreateNestedOneWithoutEmailConfirmationInput = {
    create?: XOR<UserCreateWithoutEmailConfirmationInput, UserUncheckedCreateWithoutEmailConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailConfirmationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailConfirmationNestedInput = {
    create?: XOR<UserCreateWithoutEmailConfirmationInput, UserUncheckedCreateWithoutEmailConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailConfirmationInput
    upsert?: UserUpsertWithoutEmailConfirmationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailConfirmationInput, UserUpdateWithoutEmailConfirmationInput>, UserUncheckedUpdateWithoutEmailConfirmationInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmailConfirmationCreateWithoutUserInput = {
    id?: string
    confirmationCode: string
    expirationDate: Date | string
    isConfirmed?: boolean
  }

  export type EmailConfirmationUncheckedCreateWithoutUserInput = {
    id?: string
    confirmationCode: string
    expirationDate: Date | string
    isConfirmed?: boolean
  }

  export type EmailConfirmationCreateOrConnectWithoutUserInput = {
    where: EmailConfirmationWhereUniqueInput
    create: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionsCreateWithoutUserInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
  }

  export type DeviceSessionsUncheckedCreateWithoutUserInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
  }

  export type DeviceSessionsCreateOrConnectWithoutUserInput = {
    where: DeviceSessionsWhereUniqueInput
    create: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionsCreateManyUserInputEnvelope = {
    data: DeviceSessionsCreateManyUserInput | DeviceSessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    accountId?: string
    GithubUser?: GithubUserCreateNestedOneWithoutAccountInput
    GooglebUser?: GoogleUserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    accountId?: string
    GithubUser?: GithubUserUncheckedCreateNestedOneWithoutAccountInput
    GooglebUser?: GoogleUserUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type EmailConfirmationUpsertWithoutUserInput = {
    update: XOR<EmailConfirmationUpdateWithoutUserInput, EmailConfirmationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailConfirmationCreateWithoutUserInput, EmailConfirmationUncheckedCreateWithoutUserInput>
    where?: EmailConfirmationWhereInput
  }

  export type EmailConfirmationUpdateToOneWithWhereWithoutUserInput = {
    where?: EmailConfirmationWhereInput
    data: XOR<EmailConfirmationUpdateWithoutUserInput, EmailConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type EmailConfirmationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailConfirmationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationCode?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceSessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionsWhereUniqueInput
    update: XOR<DeviceSessionsUpdateWithoutUserInput, DeviceSessionsUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceSessionsCreateWithoutUserInput, DeviceSessionsUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionsWhereUniqueInput
    data: XOR<DeviceSessionsUpdateWithoutUserInput, DeviceSessionsUncheckedUpdateWithoutUserInput>
  }

  export type DeviceSessionsUpdateManyWithWhereWithoutUserInput = {
    where: DeviceSessionsScalarWhereInput
    data: XOR<DeviceSessionsUpdateManyMutationInput, DeviceSessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceSessionsScalarWhereInput = {
    AND?: DeviceSessionsScalarWhereInput | DeviceSessionsScalarWhereInput[]
    OR?: DeviceSessionsScalarWhereInput[]
    NOT?: DeviceSessionsScalarWhereInput | DeviceSessionsScalarWhereInput[]
    deviceId?: StringFilter<"DeviceSessions"> | string
    ip?: StringFilter<"DeviceSessions"> | string
    lastActiveDate?: StringFilter<"DeviceSessions"> | string
    title?: StringFilter<"DeviceSessions"> | string
    userId?: StringNullableFilter<"DeviceSessions"> | string | null
  }

  export type AccountUpsertWithoutUserInput = {
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    GithubUser?: GithubUserUpdateOneWithoutAccountNestedInput
    GooglebUser?: GoogleUserUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    GithubUser?: GithubUserUncheckedUpdateOneWithoutAccountNestedInput
    GooglebUser?: GoogleUserUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationCreateNestedOneWithoutUserInput
    sessions?: DeviceSessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationUncheckedCreateNestedOneWithoutUserInput
    sessions?: DeviceSessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type GithubUserCreateWithoutAccountInput = {
    githubId: string
    username: string
    email: string
  }

  export type GithubUserUncheckedCreateWithoutAccountInput = {
    githubId: string
    username: string
    email: string
  }

  export type GithubUserCreateOrConnectWithoutAccountInput = {
    where: GithubUserWhereUniqueInput
    create: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
  }

  export type GoogleUserCreateWithoutAccountInput = {
    googleId: string
    username: string
    email: string
    avatar: string
  }

  export type GoogleUserUncheckedCreateWithoutAccountInput = {
    googleId: string
    username: string
    email: string
    avatar: string
  }

  export type GoogleUserCreateOrConnectWithoutAccountInput = {
    where: GoogleUserWhereUniqueInput
    create: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUpdateOneWithoutUserNestedInput
    sessions?: DeviceSessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUncheckedUpdateOneWithoutUserNestedInput
    sessions?: DeviceSessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GithubUserUpsertWithoutAccountInput = {
    update: XOR<GithubUserUpdateWithoutAccountInput, GithubUserUncheckedUpdateWithoutAccountInput>
    create: XOR<GithubUserCreateWithoutAccountInput, GithubUserUncheckedCreateWithoutAccountInput>
    where?: GithubUserWhereInput
  }

  export type GithubUserUpdateToOneWithWhereWithoutAccountInput = {
    where?: GithubUserWhereInput
    data: XOR<GithubUserUpdateWithoutAccountInput, GithubUserUncheckedUpdateWithoutAccountInput>
  }

  export type GithubUserUpdateWithoutAccountInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GithubUserUncheckedUpdateWithoutAccountInput = {
    githubId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GoogleUserUpsertWithoutAccountInput = {
    update: XOR<GoogleUserUpdateWithoutAccountInput, GoogleUserUncheckedUpdateWithoutAccountInput>
    create: XOR<GoogleUserCreateWithoutAccountInput, GoogleUserUncheckedCreateWithoutAccountInput>
    where?: GoogleUserWhereInput
  }

  export type GoogleUserUpdateToOneWithWhereWithoutAccountInput = {
    where?: GoogleUserWhereInput
    data: XOR<GoogleUserUpdateWithoutAccountInput, GoogleUserUncheckedUpdateWithoutAccountInput>
  }

  export type GoogleUserUpdateWithoutAccountInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type GoogleUserUncheckedUpdateWithoutAccountInput = {
    googleId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateWithoutGithubUserInput = {
    accountId?: string
    user?: UserCreateNestedOneWithoutAccountInput
    GooglebUser?: GoogleUserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutGithubUserInput = {
    accountId?: string
    userId?: string | null
    GooglebUser?: GoogleUserUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutGithubUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutGithubUserInput, AccountUncheckedCreateWithoutGithubUserInput>
  }

  export type AccountUpsertWithoutGithubUserInput = {
    update: XOR<AccountUpdateWithoutGithubUserInput, AccountUncheckedUpdateWithoutGithubUserInput>
    create: XOR<AccountCreateWithoutGithubUserInput, AccountUncheckedCreateWithoutGithubUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutGithubUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutGithubUserInput, AccountUncheckedUpdateWithoutGithubUserInput>
  }

  export type AccountUpdateWithoutGithubUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutAccountNestedInput
    GooglebUser?: GoogleUserUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutGithubUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    GooglebUser?: GoogleUserUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type AccountCreateWithoutGooglebUserInput = {
    accountId?: string
    user?: UserCreateNestedOneWithoutAccountInput
    GithubUser?: GithubUserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutGooglebUserInput = {
    accountId?: string
    userId?: string | null
    GithubUser?: GithubUserUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutGooglebUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutGooglebUserInput, AccountUncheckedCreateWithoutGooglebUserInput>
  }

  export type AccountUpsertWithoutGooglebUserInput = {
    update: XOR<AccountUpdateWithoutGooglebUserInput, AccountUncheckedUpdateWithoutGooglebUserInput>
    create: XOR<AccountCreateWithoutGooglebUserInput, AccountUncheckedCreateWithoutGooglebUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutGooglebUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutGooglebUserInput, AccountUncheckedUpdateWithoutGooglebUserInput>
  }

  export type AccountUpdateWithoutGooglebUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutAccountNestedInput
    GithubUser?: GithubUserUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutGooglebUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    GithubUser?: GithubUserUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type UserCreateWithoutEmailConfirmationInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DeviceSessionsCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailConfirmationInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: DeviceSessionsUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailConfirmationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailConfirmationInput, UserUncheckedCreateWithoutEmailConfirmationInput>
  }

  export type UserUpsertWithoutEmailConfirmationInput = {
    update: XOR<UserUpdateWithoutEmailConfirmationInput, UserUncheckedUpdateWithoutEmailConfirmationInput>
    create: XOR<UserCreateWithoutEmailConfirmationInput, UserUncheckedCreateWithoutEmailConfirmationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailConfirmationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailConfirmationInput, UserUncheckedUpdateWithoutEmailConfirmationInput>
  }

  export type UserUpdateWithoutEmailConfirmationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DeviceSessionsUpdateManyWithoutUserNestedInput
    account?: AccountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailConfirmationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: DeviceSessionsUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationCreateNestedOneWithoutUserInput
    account?: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    userId?: string
    username: string
    email: string
    passwordHash: string
    agreeToTerms: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailConfirmation?: EmailConfirmationUncheckedCreateNestedOneWithoutUserInput
    account?: AccountUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUpdateOneWithoutUserNestedInput
    account?: AccountUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agreeToTerms?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailConfirmation?: EmailConfirmationUncheckedUpdateOneWithoutUserNestedInput
    account?: AccountUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeviceSessionsCreateManyUserInput = {
    deviceId: string
    ip: string
    lastActiveDate: string
    title: string
  }

  export type DeviceSessionsUpdateWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionsUncheckedUpdateWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceSessionsUncheckedUpdateManyWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }



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