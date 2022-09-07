import { getFormatedDate } from "./getFormatedDate";

const getMockData = () => {
	const data = {
			logs: {},
			isTimer: false,
			timer: 0,
		},
		fullDay = 24 * 60;
	let now = new Date(),
		start,
		end,
		key;
	now = now.setDate(now.getDate() - 1);
	for (let d = new Date(2021, 1, 1); d < now; d.setDate(d.getDate() + 1)) {
		start = Math.floor(Math.random() * 900);
		end = start + 15;
		key = getFormatedDate(d);
		for (let i = 0; i < 10 && end < fullDay; i++)
			if (!i || Math.random() > 0.5) {
				start = end + Math.floor(Math.random() * 240);
				if (start >= fullDay) continue;
				end = start + Math.floor(Math.random() * 360) + 60;
				if (end >= 24 * 60) end = fullDay - 1;
				if (end - start < 20) continue;
				data.logs[key]
					? data.logs[key].push([start, end])
					: (data.logs[key] = [[start, end]]);
			}
	}
	return data;
};

export default getMockData;
