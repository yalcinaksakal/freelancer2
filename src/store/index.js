import { configureStore } from "@reduxjs/toolkit";

import sliceReducer from "./slice";

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
			slcie: sliceReducer,
		},
		middleware:
			process.env.NODE_ENV === "production"
				? defaultMiddleware
				: defaultMiddlewareConcatLogger,
	});

export default store;
