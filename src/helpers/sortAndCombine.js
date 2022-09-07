export const sortAndCombine = arr => {
	const res = [];
	arr.sort((a, b) => a[0] - b[0]);
	let start = arr[0][0],
		end = arr[0][1];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i][0] > end) {
			res.push([start, end]);
			start = arr[i][0];
			end = arr[i][1];
		} else end = Math.max(end, arr[i][1]);
	}
	res.push([start, end]);
	return res;
};
