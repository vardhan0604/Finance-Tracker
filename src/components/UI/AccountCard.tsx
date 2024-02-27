import { IAccount } from '@/lib/models/account.model';
import React from 'react'

type Props = {
        key:string
        account: IAccount
}

const AccountCard = (props: Props) => {
    const { account } = props;

    const handleClick=()=>{
        // console.log(key)
        console.log(account._id)
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