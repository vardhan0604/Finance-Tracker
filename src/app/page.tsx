
import { auth, signIn, signOut } from "@/auth";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";






function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button type="submit">Sign out</button>
    </form>
  );
}

export default async function Page() {

  let session = await auth();
  // console.log(session)
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")
  return (
    <section>
      <h1>Home</h1>
      <div>{user && <SignOut>{`Welcome ${user}`}</SignOut>}</div>
    </section>
  );
}
