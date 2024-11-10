import { Typography, Box} from "@mui/material";
import React, { Fragment } from "react";
function Info () {
    return (
        <Fragment>
            <Box maxWidth={"500px"} style={{ marginTop: "3%", textAlign: "center" }}>
            <Typography variant="h6" color="primary">
                Sitio de Nutrias Chambeadoras
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Este sitio fue creado con el fin de entretener a las personas que buscan información sobre las Nutrias Chambeadoras.
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Se debe tomar con humor y con la intención de pasar un buen rato.
            </Typography>
            </Box>
        </Fragment>

    );
}
export default Info; 