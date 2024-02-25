import { auth, signIn, signOut } from "@/auth";
import AccountForm from "@/components/accountForm";
import { getAllAccounts } from "@/lib/actions/account.action";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";


function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex gap-4"
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
  console.log(session)
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")

  let accounts= await getAllAccounts();
  console.log(accounts)

  return (
    <section>
      <div className="flex justify-between m-3 align-middle">
        <h1 className="text-xl font-bold	">Welcome to the Finance Tracker</h1>
        <div>{user && <SignOut>{user}</SignOut>}</div>
      </div>

      <AccountForm user={user} />
    </section>
  );
}
