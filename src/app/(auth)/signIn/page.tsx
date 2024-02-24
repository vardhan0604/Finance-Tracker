import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

export default async function Page() {
    return (
      <div>
        <p>You are not logged in</p>
        <Link href="api/auth/signin">
          <button>Sign in with GitHub</button>
        </Link>
      </div>
    );
  
}
