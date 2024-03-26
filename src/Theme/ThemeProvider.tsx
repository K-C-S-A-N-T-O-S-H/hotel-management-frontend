import React, { useEffect } from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// import HoC from "../HoCs";
import {} from "../redux/asyncThunk";
import { useAppSelector } from "../redux/hooks";
import RoutesPage from "../Routes";

import provideTheme from "./index";

const ThemeProviders = () => {
    // const dispatch = useAppDispatch();
    const { alertNotification, theme } = useAppSelector((state) => state);
    const getInitialAPI = async () => {};
    useEffect(() => {
        getInitialAPI();
    }, []);
    return (
        <ThemeProvider theme={provideTheme(theme)}>
            <CssBaseline enableColorScheme />
            <RoutesPage />
            {/* {alertNotification?.open && <HoC.Notification />} */}
        </ThemeProvider>
    );
};

export default ThemeProviders;
