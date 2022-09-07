import { getDuration } from "../../../helpers/getTime";
import LogItem from "./LogItem/LogItem";
import styles from "./WorkLog.module.scss";

const WorkLog = ({ logs, date, no }) => {
	const total = logs.reduce((acc, cur) => acc + cur[1] - cur[0], 0),
		totalText = getDuration(total);
	return (
		<div className={styles.log}>
			<div className={styles.no}>{no}</div>
			<div className={styles.date}>
				<div> {date}</div>
				<div className={styles.times}>
					{logs.map((log, i) => (
						<LogItem key={i} log={log} date={date} />
					))}
				</div>
			</div>
			<div
				className={styles.total}
				style={{ color: total < 480 ? "red" : "black" }}
			>
				{totalText}
			</div>
		</div>
	);
};
export default WorkLog;
