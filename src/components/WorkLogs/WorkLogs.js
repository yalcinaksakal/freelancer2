import { useSelector } from "react-redux";
import sortDates from "../../helpers/sortDates";
import WorkLog from "./WorkLog/WorkLog";
import styles from "./WorkLogs.module.scss";

const WorkLogs = () => {
	const logs = sortDates(Object.entries(useSelector(store => store.logs.logs)));
	return (
		<div className={styles.logs}>
			{logs.map((log, index) => (
				<WorkLog key={index} date={log[0]} logs={log[1]} no={index} />
			))}
		</div>
	);
};
export default WorkLogs;
