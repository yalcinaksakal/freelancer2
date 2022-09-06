import { createSlice } from "@reduxjs/toolkit";
import getMockData from "../helpers/getMockData";

const initialState = getMockData();

const logs = createSlice({
	name: "logs",
	initialState,
	reducers: {
		setSlice(state, action) {
			// state.prop = action.payload;
		},
	},
});

export const sliceActions = logs.actions;

export default logs.reducer;
