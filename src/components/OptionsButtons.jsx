import React, { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardGiftcard, MonetizationOn } from "@mui/icons-material";

function OptionsButtons() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Box style={{ marginTop: "3%", textAlign: "center" }}>
        <Typography variant="h6" color="textSecondary">
          Explora todas las opciones
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          startIcon={<MonetizationOn />}
          onClick={() => navigate("/salary")}
        >
          Cuando cobramos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: "10px" }}
          startIcon={<CardGiftcard />}
          onClick={() => navigate("/bonus")}
        >
          Aguinaldo?
        </Button>
      </Box>
    </Fragment>
  );
}

export default OptionsButtons;