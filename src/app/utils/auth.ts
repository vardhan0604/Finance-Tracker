// import { signIn } from 'next-auth/client'
"use server";
import { auth } from "@/auth";

// export default function SignIn() {
//   const handleSignIn = () => {
//     signIn('github', { callbackUrl: 'http://localhost:3000/onboarding' })
//   }

//   return (
//     <button onClick={handleSignIn}>
//       Sign in with GitHub
//     </button>
//   )
// }

export async function getSession() {

  let session = await auth();
  // console.log(session);
  let email = session?.user?.email;

  return session;
}