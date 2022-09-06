import { dateOptions } from "../config/dateOptions";

export const getFormatedDate = date =>
	new Intl.DateTimeFormat("en-UK", dateOptions).format(date);
