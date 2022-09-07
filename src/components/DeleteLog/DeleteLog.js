import Button from "../Button/Button";
import styles from "./DeleteLog.module.scss";

const DeleteLog = ({ date, index, logText, log, closeBackDrop }) => {
	return (
		<div className={styles.delete} onClick={e => e.stopPropagation()}>
			<p>Are you sure to delete the log:</p>
			<p>{date + " , " + logText}</p>
			<div className={styles.buttons}>
				<Button buttonType="cancel" onClick={closeBackDrop} />
				<Button buttonType="delete" />
			</div>
		</div>
	);
};
export default DeleteLog;
