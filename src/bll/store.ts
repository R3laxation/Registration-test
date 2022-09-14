import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { appSlice } from "./slices/appSlice";
import {registrationSlice} from "./slices/registrationSlice";


const rootReducer = combineReducers({
    app: appSlice,
    registration: registrationSlice,
});

export const store = configureStore({
        reducer: rootReducer,
    }
);

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;