import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import AccountEdit from './AccountEdit';

type Props = {
    AccountName: string;
    AccountAmount: string;
    user:string
    id:string;
    setAccounts: any;
}

export const Account = (props: Props) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {props.AccountName}
                </CardTitle>
                <AccountEdit user={props.user} id={props.id} setAccounts={props.setAccounts}/>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg> */}
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">{props.AccountAmount}</div>
                <p className="text-xs text-muted-foreground">
                    last updated 2 hours ago
                </p>
            </CardContent>
        </Card>
    )
}

export default Account