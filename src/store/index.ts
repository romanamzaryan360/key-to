import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import appSlice from "./app/appSlice";
import { useSelector } from "react-redux";

const rootReducer = combineSlices(appSlice);

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;