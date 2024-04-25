import { auth } from "@/auth";
import Navabar from "@/components/Navabar";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";
import { Overview } from "@/components/ui/charts/BarChart";
import { LineC } from "@/components/ui/charts/LineChart";
import Account from "@/components/Account";
import { ScrollArea } from "@/components/ui/scroll-area"
import Multigraph from "@/components/Multigraph";
import { Button } from '../components/ui/button';
import Accounts from "@/components/Accounts";
import { generatePseudoTransactions } from "@/lib/actions/transations.action";
import TransactionTable from "@/components/TransactionTable";
import Main from "@/components/Main";
import { RecoilRoot } from "recoil";

export default async function Page() {

  let session = await auth();
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")


  // console.log(user)


  return (
    <section className="max-h-screen">
      <Navabar user={user} />
      {/* <div className=" grid grid-cols-4" style={{ height: "calc(100vh - 68px)" }}>
      <ScrollArea className="col-span-3">
        <div className=" flex flex-col gap-4 h-full ml-6 mr-6 " style={{ height: "inherit" }}>
        
          <Accounts user={user}/>

          <div className=" grid gap-3 pt-4 pb-4 shadow-sm flex-1 mb-4 lg:grid-cols-3" style={{ height: "inherit" }}>
            <div className="flex bg-card border rounded-lg p-4 lg:row-span-2 "> 
              <Multigraph />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
          </div>
        </div>
        </ScrollArea>
        <TransactionTable user={user}/>
      </div> */}
          <Main user={user}/>
    </section>

  );
}
