import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import validationSchema from "./validationSchema";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TransactionForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      customer: {
        first_name: initialValues?.customer?.first_name ?? "",
        last_name: initialValues?.customer?.last_name ?? "",
        email: initialValues?.customer?.email ?? "",
        credit_card_type: initialValues?.customer?.credit_card_type ?? "",
        credit_card_number: initialValues?.customer?.credit_card_number ?? "",
      },
      transaction: {
        currency: initialValues?.currency ?? "",
        amount: initialValues?.amount ?? "",
      },
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ justifyContent: "space-between", mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        id="customer.first_name"
        name="customer.first_name"
        label="First Name"
        value={formik.values.customer?.first_name}
        onChange={formik.handleChange}
        error={
          formik.touched.customer?.first_name &&
          Boolean(formik.errors.customer?.first_name)
        }
        helperText={
          formik.touched.customer?.first_name &&
          formik.errors.customer?.first_name
        }
      />
      <TextField
        margin="normal"
        fullWidth
        id="customer.last_name"
        name="customer.last_name"
        label="Last Name"
        value={formik.values.customer?.last_name}
        onChange={formik.handleChange}
        error={
          formik.touched.customer?.last_name &&
          Boolean(formik.errors.customer?.last_name)
        }
        helperText={
          formik.touched.customer?.last_name &&
          formik.errors.customer?.last_name
        }
      />
      <TextField
        margin="normal"
        fullWidth
        id="customer.email"
        name="customer.email"
        label="Email"
        value={formik.values.customer?.email}
        onChange={formik.handleChange}
        error={
          formik.touched.customer?.email &&
          Boolean(formik.errors.customer?.email)
        }
        helperText={
          formik.touched.customer?.email && formik.errors.customer?.email
        }
      />

      <TextField
        margin="normal"
        fullWidth
        id="customer.credit_card_type"
        name="customer.credit_card_type"
        label="Credit Card Type"
        value={formik.values.customer?.credit_card_type}
        onChange={formik.handleChange}
        error={
          formik.touched.customer?.credit_card_type &&
          Boolean(formik.errors.customer?.credit_card_type)
        }
        helperText={
          formik.touched.customer?.credit_card_type &&
          formik.errors.customer?.credit_card_type
        }
      />
      <TextField
        margin="normal"
        fullWidth
        id="customer.credit_card_number"
        name="customer.credit_card_number"
        label="Credit Card Number"
        value={formik.values.customer?.credit_card_number}
        onChange={formik.handleChange}
        error={
          formik.touched.customer?.credit_card_number &&
          Boolean(formik.errors.customer?.credit_card_number)
        }
        helperText={
          formik.touched.customer?.credit_card_number &&
          formik.errors.customer?.credit_card_number
        }
      />
      <TextField
        margin="normal"
        fullWidth
        id="transaction.currency"
        name="transaction.currency"
        label="Currency"
        value={formik.values.transaction?.currency}
        onChange={formik.handleChange}
        error={
          formik.touched.transaction?.currency &&
          Boolean(formik.errors.transaction?.currency)
        }
        helperText={
          formik.touched.transaction?.currency &&
          formik.errors.transaction?.currency
        }
      />
      <TextField
        margin="normal"
        fullWidth
        id="transaction.amount"
        name="transaction.amount"
        label="Amount"
        value={formik.values.transaction?.amount}
        onChange={formik.handleChange}
        error={
          formik.touched.transaction?.amount &&
          Boolean(formik.errors.transaction?.amount)
        }
        helperText={
          formik.touched.transaction?.amount &&
          formik.errors.transaction?.amount
        }
      />
      <Box sx={{ mt: 2 }}>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

TransactionForm.propsTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    customer: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      credit_card_type: PropTypes.string,
      credit_card_number: PropTypes.string,
    }),
    transaction: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
    }),
  }),
};

export default React.memo(TransactionForm);
