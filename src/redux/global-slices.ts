import { createSlice } from "@reduxjs/toolkit";

export interface GlobalType {
	isMenuOpen: boolean;
}

const initialState = {
	isMenuOpen: false,
} as GlobalType;

export const globalSlices = createSlice({
	name: "global store",
	initialState,
	reducers: {
		setIsMenuOpen: (state, action) => {
			state.isMenuOpen = action.payload;
		},
	},
});

export const { setIsMenuOpen } = globalSlices.actions;
