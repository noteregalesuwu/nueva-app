import { Typography, Container } from "@mui/material";
import React, { Fragment } from "react";

function RequestDj() {
  return (
    <Fragment>
      <Container maxWidth="xs" style={{ marginTop: "5%", textAlign: "center" }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Quieres pedir una cancion?
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Proximamente podras pedirle cancion a la Nutria DJ desde aqui
        </Typography>
      </Container>
    </Fragment>
  );
}

export default RequestDj;