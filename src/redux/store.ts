import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import adminstate from "./Reducers/GlobalReducers";
// const serializableMiddleware = createSerializableStateInvariantMiddleware({

// })

export const initalState = configureStore({
    reducer: adminstate,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type AppDispatch = typeof initalState.dispatch;
export type RootState = ReturnType<typeof initalState.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
