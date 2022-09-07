import maxDate from "../../../helpers/getMaxDate";
import styles from "./DateInput.module.scss";

const DateInput = ({ date, label, setDate }) => {
	const changeHandler = e => setDate(e.target.value);
	return (
		<div className={styles.input}>
			<label>{label}</label>
			<input
				type="date"
				value={date}
				autoFocus
				onChange={changeHandler}
				max={maxDate}
			></input>
		</div>
	);
};
export default DateInput;
