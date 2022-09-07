import { useState } from "react";
import { useSelector } from "react-redux";
import { ITEMS_PER_PAGE } from "../../config/itemsPerPage";
import sortDates from "../../helpers/sortDates";
import WorkLog from "./WorkLog/WorkLog";
import styles from "./WorkLogs.module.scss";
import Pagination from "../Pagination/Pagination";
import Heading from "./Heading/Heading";

const WorkLogs = () => {
	const [curPage, setCurPage] = useState(1),
		logs = sortDates(Object.entries(useSelector(store => store.logs.logs))),
		numberOfPages = Math.ceil(logs.length / ITEMS_PER_PAGE),
		changeCurPage = newPage => setCurPage(newPage);

	return (
		<div className={styles.logs}>
			<h3>Work History</h3>
			<Pagination
				currentPage={curPage}
				numberOfPages={numberOfPages}
				clicked={changeCurPage}
			/>
			{logs.length && <Heading />}
			{logs.length ? (
				logs
					.slice((curPage - 1) * ITEMS_PER_PAGE, curPage * ITEMS_PER_PAGE)
					.map((log, index) => (
						<WorkLog
							key={index}
							date={log[0]}
							logs={log[1]}
							no={index + 1 + (curPage - 1) * ITEMS_PER_PAGE}
						/>
					))
			) : (
				<h6>There is not any log.</h6>
			)}
		</div>
	);
};
export default WorkLogs;
