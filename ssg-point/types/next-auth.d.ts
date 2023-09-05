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
        image: string,
        providerName: string,
    } & DefaultSession["user"] & KakaoProfile["kakao_account"]
  }
}


// 유저의 확장값