import React, { Fragment } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { CardGiftcard, MonetizationOn, Hotel, Restaurant, InfoSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

function OptionsList() {
  return (
    <Fragment>
      <List component="nav">
        <ListItem button component={Link} to="/salary">
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText primary="Sueldo" />
        </ListItem>

        <ListItem button component={Link} to="/bonus">
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText primary="Aguinaldo" />
        </ListItem>

        <ListItem button component={Link} to="/present">
          <ListItemIcon>
            <CardGiftcard />
          </ListItemIcon>
          <ListItemText primary="Canasta Navideña" />
        </ListItem>

        <ListItem button component={Link} to="/end-of-year-party">
          <ListItemIcon>
            <Restaurant />
          </ListItemIcon>
          <ListItemText primary="Fiesta de fin de año" />
        </ListItem>

        <ListItem button component={Link} to="/next-holiday">
          <ListItemIcon>
            <Hotel />
          </ListItemIcon>
          <ListItemText primary="Próximo Feriado" />
        </ListItem>

        <ListItem button component={Link} to="/info">
          <ListItemIcon>
            <InfoSharp />
          </ListItemIcon>
          <ListItemText primary="Informaciones" />
        </ListItem>
      </List>
    </Fragment>
  );
}

export default OptionsList;