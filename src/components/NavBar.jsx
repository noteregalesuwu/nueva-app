import React,{Fragment} from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
const useStiles = makeStyles(theme => ({
    offset : {
        ...theme.mixins.toolbar, 
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    }
    })
  );
const NavBar = (props) => {
    const classes = useStiles();
    return(
        <Fragment>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton aria-label="menu" className={classes.menuButton} onClick={() => props.openList()}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">Nutrias Chambeadoras</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </Fragment>
    )
};
export default NavBar;