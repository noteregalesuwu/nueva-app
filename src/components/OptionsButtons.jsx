import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function OptionsButtons() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Box style={{ marginTop: "3%", textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          Explora todas las opciones
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/salary")}
        >
          Cuando cobramos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/bonus")}
        >
          Aguinaldo?
        </Button>
      </Box>
    </Fragment>
  );
}

export default OptionsButtons;