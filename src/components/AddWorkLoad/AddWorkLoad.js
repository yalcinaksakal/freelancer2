import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFormatedDate } from "../../helpers/getFormatedDate";
import maxDate from "../../helpers/getMaxDate";
import { getMinutes, getTime } from "../../helpers/getTime";
import { logActions } from "../../store/logsSlice";
import Button from "../Button/Button";
import TimeInput from "../TimeInput/TimeInput";
import styles from "./AddWorkLoad.module.scss";
import DateInput from "./DateInput/DateInput";

const AddWorkLoad = () => {
	const [start, setStart] = useState("00:00"),
		[end, setEnd] = useState("23:59"),
		[date, setDate] = useState(maxDate),
		[err, setErr] = useState(""),
		[isAdded, setIsAdded] = useState(false),
		timeProps = { start, end, setEnd, setStart },
		dispatch = useDispatch(),
		handleAdd = () => {
			if (start >= end) {
				setErr("End can't be earlier than start!");
				return;
			}
			const time = new Date().getHours() * 60 + new Date().getMinutes();
			if (date === maxDate && getMinutes(end) > time) {
				setErr("End can't be later than now");
				return;
			}
			setErr("");
			setIsAdded(true);
			setTimeout(() => {
				setIsAdded(false);
			}, 2000);
			dispatch(
				logActions.addLog({
					date: getFormatedDate(new Date(date.split("-"))),
					start: getMinutes(start),
					end: getMinutes(end),
				})
			);
		};

	return (
		<div className={styles.log}>
			<h3>Add New Work Load</h3>
			<p style={{ color: "red", minHeight: "30px" }}>{err}</p>
			<DateInput date={date} label="Date" setDate={setDate} />
			<TimeInput {...timeProps} />
			<Button buttonType="add" onClick={handleAdd} />
			{isAdded && <p>{date + " , " + start + " - " + end + " added."}</p>}
		</div>
	);
};
export default AddWorkLoad;
