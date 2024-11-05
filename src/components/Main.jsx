import React, { Fragment } from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Salary from "./Salary";
import BoxDrawer from "./BoxDrawer";
import Bonus from "./Bonus";
import EndOfYearParty from "./EndOfYearParty";
import Present from "./Present";
import NextHoliday from "./NextHoliday";
import Info from "./Info";

const useStiles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Main = () => {
    const [openList, setOpenList] = React.useState(false);
    const classes = useStiles();
    return (
        <Router>
            <Fragment>
                <div className={classes.root}>
                    <NavBar openList={() => setOpenList(!openList)} />
                    <Hidden xsDown>
                        <BoxDrawer variant="permanent" open={true} />
                    </Hidden>
                    <Hidden smUp>
                        <BoxDrawer variant="temporary" open={openList} onClose={() => setOpenList(!openList)} />
                    </Hidden>

                    <div className={classes.content}>
                        <div className={classes.toolbar}></div>
                        <Routes>
                            <Route path="/salary" element={<Salary />} />
                            <Route path="/bonus" element={<Bonus />} />
                            <Route path="/end-of-year-party" element={<EndOfYearParty />} />
                            <Route path="/present" element={<Present />} />
                            <Route path="/next-holiday" element={<NextHoliday />} />
                            <Route path="/info" element={<Info />} />
                        </Routes>
                    </div>
                </div>
            </Fragment>
        </Router>
    );
};

export default Main;