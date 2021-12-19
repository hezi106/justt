import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CreateTransaction from "./pages/Transactions/CreateTransaction";
import EditTransaction from "./pages/Transactions/EditTransaction";
import TransactionsList from "./pages/Transactions/TransactionsList";

function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            Justt Billing System
          </Typography>
          <nav>
            <Button sx={{ my: 1, mx: 1.5 }}>
              {location.pathname.match(/(edit|create)\b/) && (
                <NavLink to="/">Back to Transactions</NavLink>
              )}
            </Button>
            <Button sx={{ my: 1, mx: 1.5 }}>
              <NavLink to="/create">Create Transaction</NavLink>
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<TransactionsList />} />
          <Route path="/create" element={<CreateTransaction />} />
          <Route path="/edit/:id" element={<EditTransaction />} />
          <Route
            path="*"
            element={
              <Typography component="h1" variant="h5">
                No Match
              </Typography>
            }
          ></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
