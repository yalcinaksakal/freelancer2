import { sliceActions } from "./slice";

export const fetchData = () => async dispatch => {
	try {
		// const res = await fetch(),
		// 	data = await res.json();
		//dispatch(sliceActions.setData(data))
	} catch (error) {
		console.error(error.message);
	}
};
