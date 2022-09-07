import styles from "./WorkLog.module.scss";

const WorkLog = ({ logs, date, no }) => {
	const total = 100;
	return (
		<div className={styles.log}>
			<div className={styles.no}>{no}</div>
			<div className={styles.date}>{date}</div>
			<div className={styles.total}>{total}</div>
		</div>
	);
};
export default WorkLog;
