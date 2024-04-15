import { signOut } from '@/auth';
import React from 'react'
import { Button } from './ui/button';

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

        <Button type="submit" variant="default">Sign Out</Button>

      </form>
    );
  }
  
const Navabar = ({user}: Props) => {
  return (
    <div className="flex h-16 justify-between p-3 items-center border-b-2 border-border">
        <h1 className='text-2xl font-bold'>Finance Tracker</h1>
        <div >
        {user && <SignOut>{user}</SignOut>}
        </div>
    </div>
  )
}

export default Navabar