import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const List = ({ items, children }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item, i) => children(item))}
    </Grid>
  );
}

List.propTypes = {
    items: PropTypes.array,
    children: PropTypes.arrayOf(PropTypes.element)
};

export default React.memo(List);


