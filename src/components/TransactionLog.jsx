import { mockTransactions } from "../data/mockData";
import React from 'react'; 
import { Button } from "@mui/material";


function TransactionLog ({ transaction }) {
console.log(transaction);

    return (
       <tr>
            <td>{transaction.txId} < br/>
            {transaction.user}
            </td>
            <td>{transaction.date}</td>
            <td><Button variant="contained" color="primary">{transaction.cost}</Button></td>
        </tr>
    )
}

export default TransactionLog;

