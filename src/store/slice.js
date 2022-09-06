import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const slice = createSlice({
	name: "slice",
	initialState,
	reducers: {
		setSlice(state, action) {
			// state.prop = action.payload;
		},
	},
});

export const sliceActions = slice.actions;

export default slice.reducer;
