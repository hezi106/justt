import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import BasicCard from "../../components/BasicCard";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TransactionCard = ({ transaction, onDelete }) => {
  return (
    <BasicCard>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2">
          Customer Name:{" "}
          {transaction.customer.first_name +
            " " +
            transaction.customer.last_name}
        </Typography>
        <Typography variant="body2">
          Email Address: {transaction.customer.email}
        </Typography>
        <Typography variant="body2">
          Credit Card Type: {transaction.customer.credit_card_type}
        </Typography>
        <Typography variant="body2">
          Credit Card Number: {transaction.customer.credit_card_number}
        </Typography>
        <Typography variant="body2">
          Currency: {transaction.currency}
        </Typography>
        <Typography variant="body2">Amount: {transaction.amount}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(transaction.id)}>
          Delete
        </Button>
        <Button size="small">
          <Link to={`/edit/${transaction.id}`}>Edit</Link>
        </Button>
      </CardActions>
    </BasicCard>
  );
};

TransactionCard.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.number,
    customer: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      credit_card_type: PropTypes.string,
      credit_card_number: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    customer_id: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default TransactionCard;
