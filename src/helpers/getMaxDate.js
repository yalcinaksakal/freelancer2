const today = new Date(),
	maxDate =
		today.getFullYear() +
		"-" +
		(today.getMonth() < 9 ? "0" : "") +
		(today.getMonth() + 1) +
		"-" +
		(today.getDate() < 10 ? "0" : "") +
		today.getDate();

export default maxDate;
