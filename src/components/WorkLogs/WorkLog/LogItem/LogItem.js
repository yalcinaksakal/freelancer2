import styles from "./LogItem.module.scss";
import Button from "../../../Button/Button";
import { getDuration, getTime } from "../../../../helpers/getTime";
const LogItem = ({ log, date, changeSlot, index }) => {
	return (
		<div className={styles.container} onMouseEnter={() => changeSlot(index)}>
			<div className={styles.time}>
				{log.map(t => getTime(t)).join(" - ") +
					" " +
					getDuration(log[1] - log[0])}
			</div>
			<div className={styles.buttons}>
				<Button buttonType="edit" />
				<Button buttonType="delete" />
			</div>
		</div>
	);
};
export default LogItem;
