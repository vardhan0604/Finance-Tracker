import { auth, signIn, signOut } from "@/auth";
import AccountCard from "@/components/UI/AccountCard";
import AccountCards from "@/components/UI/AccountCards";
import Navabar from "@/components/UI/Navabar";
import AccountForm from "@/components/accountForm";
import { getAllAccounts } from "@/lib/actions/account.action";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";


export default async function Page() {
  let session = await auth();
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")
  return (
    <section className="h-lvh">
      <Navabar user={user} />
      {/* <AccountForm user={user} /> */}
      <div className="grid grid-cols-4" style={{height: "calc(100vh - 64px)"}}>
        <div className="bg-gray-200 col-span-3 h-full">60%</div>
        <div className="bg-gray-300 col-span-1">40%</div>
      </div>


    </section>
  );
}
