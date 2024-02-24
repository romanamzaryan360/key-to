import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { MODE } from "./types";
import { LIGHT } from "../../constants/modes";

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
            state.mode  = action.payload;
        },
    },
});

export const { switchMode } = appSlice.actions;

export default appSlice;
