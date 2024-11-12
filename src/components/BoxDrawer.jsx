import React from "react";
import { Drawer, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import OptionsList from "./OptionsList";

const drawerLength = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerLength,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerLength,
  },
}));

const ToolbarOffset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const BoxDrawer = (props) => {
  const theme = useTheme(); 

  return (
    <StyledDrawer
      variant="temporary"
      open={props.open}
      onClose={props.onClose}
      backgroundColor={theme.palette.background.navBar}
    >
      <div style={{ background: theme.palette.background.navBar }}>
        <ToolbarOffset />
        <Divider />
        <OptionsList toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} />
      </div>
    </StyledDrawer>
  );
};

export default BoxDrawer;
