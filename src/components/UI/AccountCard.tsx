import { deleteAccount, getAllAccounts, updateAccount } from '@/lib/actions/account.action';
import { IAccount } from '@/lib/models/account.model';
import React from 'react'

type Props = {
        key:string
        account: IAccount
        setAccounts: React.Dispatch<React.SetStateAction<IAccount[]>>;
}

const AccountCard = (props: Props) => {
    const { account,setAccounts } = props;

    const handleClick=async()=>{
        // const res= await updateAccount(account._id,"changed",1000000)
        const res= await deleteAccount(account._id)
        // console.log(key)
        // console.log(res)

        const updated=await getAllAccounts();
        setAccounts(updated)
        // console.log(account._id)
    }

    return (
        <div className='bg-slate-600 rounded-md ' onClick={handleClick}>
            <p>Name: {account.name}</p>
            <p>Balance: {account.balance}</p>
        </div>
    )
}

export default AccountCard

// {
//     _id: new ObjectId('65db0527af1acf6fc1a49d8c'),
//     email: 'harsh062004@gmail.com',
//     name: 'kotak 811',
//     balance: 638,
//     createdAt: 2024-02-25T09:15:19.860Z,
//     updatedAt: 2024-02-25T09:15:19.860Z,
//     __v: 0
//   }