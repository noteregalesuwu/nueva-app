import { Typography, Box, Button, Container } from "@mui/material";
import React, { Fragment } from "react";

function Index() {
  return (
    <Fragment>
      <Container maxWidth="sm" style={{ marginTop: "5%", textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Bienvenidos a Nutrias Chambeadoras
        </Typography>
        <Typography variant="h5" gutterBottom>
          Explora nuestras secciones
        </Typography>
      </Container>
    </Fragment>
  );
}

export default Index;