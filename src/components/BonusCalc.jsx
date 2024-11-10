import { Typography, Container } from "@mui/material";
import React, { Fragment } from "react";

function BonusCalc() {
  return (
    <Fragment>
      <Container maxWidth="xs" style={{ marginTop: "5%", textAlign: "center" }}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Calcula tu aguinaldo
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Proximamente podras calcular tu NutriAguinaldo aqui mismo
        </Typography>
      </Container>
    </Fragment>
  );
}

export default BonusCalc;