const adjustDate = date =>
		date.split(",")[1].trim().split("/").reverse().join(""),
	sortDates = dates =>
		[...dates].sort((a, b) => {
			const dateA = adjustDate(a[0]),
				dateB = adjustDate(b[0]);
			return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
		});

export default sortDates;
