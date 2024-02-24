// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [GitHub],
// });

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { auth, handlers:{GET,POST}, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    }),
  ],
});

// // middleware.ts
// export { auth as default } from "auth"

// // app/api/auth/[...nextauth].ts
// import { handlers } from "auth"
// export const { GET, POST } = handlers
// export const runtime = "edge"
