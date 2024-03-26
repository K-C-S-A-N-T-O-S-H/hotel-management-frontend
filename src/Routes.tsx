import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import RoutesEnum from "./enums/Routes.enum";
import { useAppDispatch } from "./redux/hooks";
import { handleBreakPoints } from "./redux/Reducers/GlobalReducers";
import Home from "./pages/home";

const RoutesPage = () => {
    const dispatch = useAppDispatch();
   
    const muiTheme = useTheme();
    const xs = useMediaQuery(muiTheme.breakpoints.up("xs"));
    const sm = useMediaQuery(muiTheme.breakpoints.up("sm"));
    const md = useMediaQuery(muiTheme.breakpoints.up("md"));
    const lg = useMediaQuery(muiTheme.breakpoints.up("lg"));
    const xl = useMediaQuery(muiTheme.breakpoints.up("xl"));
    React.useEffect(() => {
        dispatch(handleBreakPoints({ xs, sm, md, lg, xl }));
    }, [xs, sm, md, lg, xl]);
     const routes = createBrowserRouter([
        {
            path:RoutesEnum.home, element: <Home />
        }
    ])
    return (
        <RouterProvider router={routes}/>
    );
};

export default RoutesPage;
