import { Typography, Container } from "@mui/material";
import React, { Fragment } from "react";

function Index() {
  return (
    <Fragment>
      <Container maxWidth="xs" style={{ marginTop: "5%", textAlign: "center" }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Bienvenidos a Nutrias Chambeadoras
        </Typography>
      </Container>
    </Fragment>
  );
}

export default Index;