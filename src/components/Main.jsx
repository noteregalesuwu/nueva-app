import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { styled } from "@mui/material/styles";
import NavBar from "./NavBar";
import Salary from "./Salary";
import BoxDrawer from "./BoxDrawer";
import Bonus from "./Bonus";
import EndOfYearParty from "./EndOfYearParty";
import Present from "./Present";
import NextHoliday from "./NextHoliday";
import Info from "./Info";
import Index from "./Index";
import OptionsButtons from "./OptionsButtons";
import RequestDj from "./RequestDj";
import BonusCalc from "./BonusCalc";

const Root = styled('div')(({ theme }) => ({
    display: "flex",
    minHeight: "100vh",
}));

const ToolbarOffset = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.background.ueno,
}));

const Content = styled('main')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
}));

const Main = ({ toggleTheme, currentTheme }) => {
    const [openList, setOpenList] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpenList(!openList);
    };

    return (
        <Router>
            <Fragment>
                <Root>
                    <NavBar openList={handleDrawerToggle} />
                    <BoxDrawer
                        open={openList}
                        onClose={handleDrawerToggle}
                        toggleTheme={toggleTheme}
                        isDarkMode={currentTheme === 'dark' || currentTheme === 'darkChristmas'}
                    />
                    <Content>
                        <ToolbarOffset />
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/salary" element={<Salary />} />
                            <Route path="/bonus" element={<Bonus />} />
                            <Route path="/end-of-year-party" element={<EndOfYearParty />} />
                            <Route path="/present" element={<Present />} />
                            <Route path="/next-holiday" element={<NextHoliday />} />
                            <Route path="/info" element={<Info />} />
                            <Route path="/bonus-calc" element={<BonusCalc />} />
                            <Route path="/request-dj" element={<RequestDj />} />
                        </Routes>
                        <OptionsButtons />
                    </Content>
                </Root>
            </Fragment>
        </Router>
    );
};

export default Main;
