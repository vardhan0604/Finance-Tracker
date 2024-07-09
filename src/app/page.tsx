import { auth } from "@/auth";
import Navabar from "@/components/Navabar";
import { checkUser } from "@/lib/actions/users.action";
import { redirect } from "next/navigation";
import Main from "@/components/Main";

export default async function Page() {
  let session = await auth();
  let user = session?.user?.email;
  if (!user) redirect("/signIn")
  let check = await checkUser(user);
  if (!check) redirect("/onboarding")

  return (
    <section className="max-h-screen">
      <Navabar user={user} />
          <Main user={user}/>
    </section>

  );
}
