export const getTime = minutes =>
		((Math.floor(minutes / 60) % 24) + "").padStart(2, "0") +
		":" +
		((minutes % 60) + "").padStart(2, "0"),
	getDuration = minutes =>
		(Math.floor(minutes / 60) % 24
			? (Math.floor(minutes / 60) % 24) + "h "
			: "") + (minutes % 60 ? (minutes % 60) + "m" : ""),
	getMinutes = time =>
		time
			.split(":")
			.reduce((acc, cur, index) => acc + cur * (index ? 1 : 60), 0);
