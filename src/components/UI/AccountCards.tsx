"use client"
import { IAccount } from "@/lib/models/account.model";
import AccountCard from "./AccountCard";

interface AccountCardsProps {
    accounts: IAccount[];
}

const AccountCards = ({ accounts }: AccountCardsProps) => {
    
    return (
        <div className="flex gap-7">
            {accounts.map((account: IAccount) => (
                <AccountCard key={account._id.toString()} account={account} />
            ))}
        </div>
    );
};

export default AccountCards;
