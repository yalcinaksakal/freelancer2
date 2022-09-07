import styles from "./input.module.scss";

const Input = ({ time, label, setTime }) => {
	const changeHandler = e => setTime(e.target.value);
	return (
		<div className={styles.input}>
			<label>{label}</label>
			<input
				type="time"
				value={time}
				onChange={changeHandler}
				min="00:00"
				max="23:59"
				step={60}
			></input>
		</div>
	);
};

export default Input;
