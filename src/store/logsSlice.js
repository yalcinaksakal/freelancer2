import { createSlice } from "@reduxjs/toolkit";
import getMockData from "../helpers/getMockData";
import { getMinutes } from "../helpers/getTime";
import { sortAndCombine } from "../helpers/sortAndCombine";

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
		editLog(state, action) {
			const { date, index, start, end } = action.payload;
			state.logs[date][index] = [getMinutes(start), getMinutes(end)];
			state.logs[date] = sortAndCombine([...state.logs[date]]);
		},
	},
});

export const logActions = logs.actions;

export default logs.reducer;
