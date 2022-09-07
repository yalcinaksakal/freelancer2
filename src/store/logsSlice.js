import { createSlice } from "@reduxjs/toolkit";
import getMockData from "../helpers/getMockData";

const initialState = getMockData();

const logs = createSlice({
	name: "logs",
	initialState,
	reducers: {
		deleteLog(state, action) {
			const { date, index } = action.payload;
			state.logs[date].splice(index, 1);
			!state.logs[date].length && delete state.logs[date];
		},
	},
});

export const logActions = logs.actions;

export default logs.reducer;
