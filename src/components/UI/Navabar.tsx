import { signOut } from '@/auth';
import React from 'react'

type Props = {
    user: string;
}

function SignOut({ children }: { children: React.ReactNode }) {
    return (
      <form className="flex gap-4 items-center "
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <p>{children}</p>
        <button type="submit" className='bg-secondary-primary p-1 rounded-md hover:bg-slate-400  duration-150 '>Sign out</button>
      </form>
    );
  }
  
const Navabar = ({user}: Props) => {
  return (
    <div className="flex h-16 justify-between p-3 items-center bg-primary">
        <h1 className='text-2xl font-bold'>Finance Tracker</h1>
        <div >
        {user && <SignOut>{user}</SignOut>}
        </div>
    </div>
  )
}

export default Navabar