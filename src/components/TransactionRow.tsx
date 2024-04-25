import React from 'react'
import { TableCell, TableRow } from './ui/table'
import TransactionEdit from './TransactionEdit';

type Props = {
    id: string;
    Account: string;
    Amount: string;
    Category: string;
    Type: string;
}

export const TransactionRow = (props: Props) => {
    return (
        <TableRow>
            <TableCell className="font-medium text-left">{props.Account}</TableCell>
            <TableCell className='text-left'>{`₹${props.Amount}`}</TableCell>
            <TableCell className='text-left'>{props.Category}</TableCell>
            <TableCell className='text-left'>{props.Type}</TableCell>
            <TableCell className='text-left'>{<TransactionEdit id={props.id}/>}</TableCell>
        </TableRow>
    )
}

export default TransactionRow