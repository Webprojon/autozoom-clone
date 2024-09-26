import { configureStore } from "@reduxjs/toolkit";
import { globalSlices } from "./global-slices";

export const store = configureStore({
	reducer: {
		global: globalSlices.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
