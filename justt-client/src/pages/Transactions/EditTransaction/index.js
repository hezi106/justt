import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TransactionForm from "../../../components/TransactionForm";

const onSubmit = (transactionId , navigate) => (values) => {
  console.log("EditTransaction -> onSubmit called", values);
  fetch(`http://localhost:6868/api/transactions/${transactionId}`,{
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  }).then((response) => response.json()).then(()=> {
    navigate("/")
  });
};

const EditTransaction = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmitWithTransactionIdAndNavigate = onSubmit(id, navigate)
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    fetch(`http://localhost:6868/api/transactions/${id}`)
      .then((response) => response.json())
      .then((responseData) => setInitialValues({...responseData}));
  }, [id]);

  return (
    <>
      <Typography component="h1" variant="h5">
            Edit a transaction {id}
      </Typography>
      <TransactionForm
        initialValues={initialValues}
        onSubmit={onSubmitWithTransactionIdAndNavigate}
      ></TransactionForm>
    </>
  );
};

export default React.memo(EditTransaction);
