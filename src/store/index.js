import { configureStore } from "@reduxjs/toolkit";

import logsReducer from "./logsSlice";

const loggerMiddleware = store => next => action => {
		if (!action.type) {
			return next(action);
		}

		console.log("=====> type: ", action.type);
		console.log("       payload: ", action.payload);
		console.log(
			"       currentState: ",
			store.getState()[action.type.split("/")[0]]
		);

		next(action);

		console.log(
			"       next state: ",
			store.getState()[action.type.split("/")[0]]
		);
	},
	defaultMiddleware = getDefaultMiddleware => getDefaultMiddleware(),
	defaultMiddlewareConcatLogger = getDefaultMiddleware =>
		getDefaultMiddleware().concat(loggerMiddleware),
	store = configureStore({
		reducer: {
			logs: logsReducer,
		},
		middleware:
			process.env.NODE_ENV === "production"
				? defaultMiddleware
				: defaultMiddlewareConcatLogger,
	});

export default store;
