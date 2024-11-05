import React from "react";
import { makeStyles,Drawer, Divider, Typography } from "@material-ui/core";
import OptionsList from "./OptionsList";
const drawerLength = 240;
const useStiles = makeStyles(theme => ({
    drawer: {
        width: drawerLength,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerLength,
    },
    toolbar: theme.mixins.toolbar,
}));
const BoxDrawer = (props) => {
    const classes = useStiles();
    return (
        <Drawer className={classes.drawer} variant={props.variant} classes={{paper:classes.drawerPaper}} open={props.open} onClose={props.onClose ? props.onClose : null}>
        <div className={classes.content}>
            <div className={classes.toolbar}>
                
            </div>
            <Divider/>
            <OptionsList/>
        </div>
        </Drawer>
    )
};
export default BoxDrawer;