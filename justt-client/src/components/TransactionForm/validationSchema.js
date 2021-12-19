import * as yup from "yup";

const validationSchema = yup.object({
  customer: yup.object({
    first_name: yup
      .string("Enter your firstName")
      .required("First name is required"),
    last_name: yup
      .string("Enter your Last name")
      .required("Last name is required"),
    email: yup
      .string("Enter your Email address")
      .required("Email address is required"),
    credit_card_type: yup
      .string("Enter credit card type")
      .required("Credit Card Type is required"),
    credit_card_number: yup
      .string("Enter credit card number")
      .required("Credit Card Number is required"),
  }),
  transaction: yup.object({
    currency: yup.string("Enter currency").required("Currency is required"),
    amount: yup.number("Enter amount").required("Amount is required"),
  }),
});

export default validationSchema;
