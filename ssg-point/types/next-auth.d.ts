import NextAuth, { DefaultSession } from "next-auth/next";

//덮어쓰는식
declare module "next-auth" {

  interface Session {
    user: {
        address: string,
        token: string,
        uuid: string,
        role: string,
        name: string,
    } & DefaultSession["user"]
  }
}

// 유저의 확장값