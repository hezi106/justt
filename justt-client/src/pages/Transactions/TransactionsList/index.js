import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import List from "../../../components/List";
import TransactionCard from "../../../components/TransactionCard";

const TransactionsList = (props) => {
  const [transactions, setTransactions] = useState([]);

  const onDelete = (transactionId) => {
    fetch(`http://localhost:6868/api/transactions/${transactionId}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    })
    .then(() => {
      setTransactions(
        transactions.filter(
          (transaction) => transaction.id !== transactionId
        )
      );
    });
  };

  useEffect(() => {
    fetch("http://localhost:6868/api/transactions/")
      .then((response) => response.json())
      .then((responseData) => setTransactions(responseData));
  }, []);

  return (
    <>
      <Typography component="h1" variant="h5" sx={{mb: 2}}>
        Transactions List
      </Typography>
      <List items={transactions}>
        {(transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          ></TransactionCard>
        )}
      </List>
    </>
  );
};

export default React.memo(TransactionsList);
