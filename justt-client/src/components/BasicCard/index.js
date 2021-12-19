import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const BasicCard = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" , alignItems: "flex-start"}}>
        {children}
      </Card>
    </Grid>
  );
};

BasicCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default React.memo(BasicCard);
