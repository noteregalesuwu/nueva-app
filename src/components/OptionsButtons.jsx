import {Box, Button,Typography } from "@mui/material";
import React, { Fragment } from "react";

function OptionsButtons() {
  return (
    <Fragment>
        <Box style={{ marginTop: "3%", textAlign: "center" }}>
          <Typography variant="h6" color="primary">Explora todas las opciones</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
            href="/salary"
          >
            Cuando cobramos
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "10px" }}
            href="/bonus"
          >
            Aguinaldo?
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ margin: "10px" }}
            href="/info"
          >
            Informacion
          </Button>
        </Box>
    </Fragment>
  );
}

export default OptionsButtons;