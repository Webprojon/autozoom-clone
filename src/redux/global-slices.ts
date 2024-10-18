import { createSlice } from "@reduxjs/toolkit";

export interface GlobalType {
	inputValue: string;
}

const initialState = {
	inputValue: "",
} as GlobalType;

export const globalSlices = createSlice({
	name: "global store",
	initialState,
	reducers: {
		setInputValue: (state, action) => {
			state.inputValue = action.payload;
		},
	},
});

export const { setInputValue } = globalSlices.actions;
