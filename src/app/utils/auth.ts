// import { signIn } from 'next-auth/client'
"use server";
import { auth } from "@/auth";

export async function getSession() {

  let session = await auth();
  // console.log(session);
  let email = session?.user?.email;

  return session;
}