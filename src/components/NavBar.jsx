import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
}));

const NavBar = (props) => {
  return (
    <Fragment>
      <StyledAppBar>
        <Toolbar>
          <MenuButton aria-label="menu" onClick={props.openList}>
            <MenuIcon />
          </MenuButton>
          <Typography variant="h6">Nutrias Chambeadoras</Typography>
        </Toolbar>
      </StyledAppBar>
      <Offset />
    </Fragment>
  );
};

export default NavBar;