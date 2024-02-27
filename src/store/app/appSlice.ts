import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { MODE } from "./types";
import { DARK, LIGHT } from "../../constants/modes";
import { RootState } from "..";

const initialState: {
    mode: MODE;
} = {
    mode: LIGHT,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        switchMode: (state, action: PayloadAction<MODE>) => {
            state.mode = action.payload;
        },
    },
});

export const selectIsDark = (state: RootState) => state.app.mode === DARK;

export const { switchMode } = appSlice.actions;

export default appSlice;
