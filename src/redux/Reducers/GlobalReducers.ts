import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { themeObject } from "../../Theme/CustomTheme";
import {} from "../asyncThunk";
import { initialState } from "../ReducerInitialState";
import { alertNotificationProps, BreakPointsProps, dailogProps, InitialState, modelProps } from "../types";

export const AdminProvider = createSlice({
    name: "AdminState",
    initialState,
    reducers: {
        handleModel: (state: InitialState, action: PayloadAction<modelProps>) => {
            state.modal = { ...state.modal, ...action.payload };
        },
        showAlert: (state: InitialState, action: PayloadAction<alertNotificationProps>) => {
            state.alertNotification = {
                ...state.alertNotification,
                ...action.payload
            };
        },
        handleDailog: (state: InitialState, action: PayloadAction<dailogProps>) => {
            state.dailog = { ...state.dailog, ...action.payload };
        },
        // Navigation
        updateNavigate: (state: InitialState, action: PayloadAction<any>) => {
            state.redirect = action.payload;
        },
        // theme
        switchTheme: (state: InitialState) => {
            state.theme.mode = state.theme.mode === "dark" ? "light" : "dark";
        },
        updateTheme: (state: InitialState, action: PayloadAction<themeObject>) => {
            state.theme = { ...state.theme, ...action.payload };
        },
        handleBreakPoints: (state: InitialState, action: PayloadAction<BreakPointsProps>) => {
            state.breakPoints = action.payload;
        }
    }
});
export const { handleModel, showAlert, handleDailog, switchTheme, handleBreakPoints, updateTheme, updateNavigate } = AdminProvider.actions;

export default AdminProvider.reducer;
