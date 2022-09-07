import { useState } from "react";
import { getDuration } from "../../../helpers/getTime";
import VisualLog from "../../VisualLog/VisualLog";
import LogItem from "./LogItem/LogItem";
import styles from "./WorkLog.module.scss";

const WorkLog = ({ logs, date, no }) => {
	const total = logs.reduce((acc, cur) => acc + cur[1] - cur[0], 0),
		totalText = getDuration(total),
		[activeSlot, setActiveSlot] = useState(-1);
	return (
		<div className={styles.log}>
			<div className={styles.no}>{no}</div>
			<div className={styles.date} onMouseLeave={() => setActiveSlot(-1)}>
				<div> {date}</div>
				<div className={styles.times}>
					{logs.map((log, i) => (
						<LogItem
							key={i}
							log={log}
							date={date}
							index={i}
							changeSlot={setActiveSlot}
						/>
					))}
				</div>
			</div>
			<div
				className={styles.total}
				style={{ color: total < 480 ? "orange" : "black" }}
			>
				<div className={styles.text}>{totalText}</div>
				<VisualLog logs={logs} activeSlot={activeSlot} />
			</div>
		</div>
	);
};
export default WorkLog;
