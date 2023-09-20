import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      avatarUrl?: string | null;
      role?: string | null;
    };
    expires: ISODateString;
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    name?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    role?: string | null;
    sub?: string;
  }
}
