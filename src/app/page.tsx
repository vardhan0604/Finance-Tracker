import { auth } from "@/auth";
import Navabar from "@/components/ui/Navabar";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TransactionsTable from "@/components/transactionsTable";
import { Overview } from "@/components/ui/charts/BarChart";
import { LineC } from "@/components/ui/charts/LineChart";
import { CalenderComp } from "@/components/ui/Calender";
import Accounts from "@/components/Accounts";


export default async function Page() {

  let session = await auth();
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")

  return (
    <section className="max-h-screen">
      <Navabar user={user} />
      <div className=" grid grid-cols-4" style={{ height: "calc(100vh - 64px)" }}>
        <div className=" flex flex-col gap-4 col-span-3 h-full ml-6 mr-6 " style={{ height: "inherit" }}>
          <div>
            <div className="pt-3 pb-2 text-xl font-extrabold" >
              Accounts :
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
              <Accounts AccountName="Kotak Bank" AccountAmount="₹51,273" />
              <Accounts AccountName="Kotak Bank" AccountAmount="₹51,273" />
              <Accounts AccountName="Kotak Bank" AccountAmount="₹51,273" />
              <Accounts AccountName="Kotak Bank" AccountAmount="₹51,273" />
            </div>
          </div>


          <div className=" grid gap-3 pt-4 pb-4 shadow-sm flex-1 mb-4 lg:grid-cols-3">
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              {/* <CalenderComp /> */}
              <LineC />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <LineC />
            </div>
            <div className="bg-card border rounded-lg p-4">
              <Overview />
            </div>
          </div>

        </div>
        <div className="flex flex-col col-span-1 border-l-2" style={{ height: "inherit" }}>
          <h1 className="text-2xl font-bold text-center p-2 mr-2">Your Transactions</h1>
          <TransactionsTable />
        </div>
      </div>


    </section>
  );
}
