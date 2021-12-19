import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TransactionForm from "../../../components/TransactionForm";

const onSubmit = (navigate) => (values) => {
  console.log("CreateTransaction -> onSubmit called", values);
  fetch(`http://localhost:6868/api/transactions/`,{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  }).then((response) => response.json()).then(()=> {
    navigate("/")
  });
};

const CreateTransaction = (props) => {
  const navigate = useNavigate();
  const onSubmitWithNavigate = onSubmit(navigate);
  return (
    <>
      <Typography component="h1" variant="h5">
            Create a new transaction
      </Typography>
       <TransactionForm
        onSubmit={onSubmitWithNavigate}
      ></TransactionForm>
    </>
  );
};

export default React.memo(CreateTransaction);
