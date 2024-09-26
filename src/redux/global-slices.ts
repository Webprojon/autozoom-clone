import { createSlice } from "@reduxjs/toolkit";

export interface GlobalType {
	name: string;
}

const initialState = {} as GlobalType;

export const globalSlices = createSlice({
	name: "global store",
	initialState,
	reducers: {},
});

//export const {} = globalSlices.actions;
