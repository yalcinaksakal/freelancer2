import styles from "./TimeSlot.module.scss";

const TimeSlot = ({ start, end, isActive }) => {
	const style = {
		"--d": Math.floor((360 * (end - start)) / 1440) + "deg",
		"--r": Math.floor((360 * start) / 1440) + "deg",
		"--c":
			end - start === 1440
				? "rgba(255, 255, 255, 0.1)"
				: isActive
				? "rgba(34, 250, 67, 0.392)"
				: "rgba(0, 20, 255, 0.2)",
	};

	return <div className={styles.pie} style={style}></div>;
};

export default TimeSlot;
