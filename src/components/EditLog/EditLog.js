import Button from "../Button/Button";
import styles from "./EditLog.module.scss";

const EditLog = ({ date, index, logText, log, closeBackDrop }) => {
	return (
		<div className={styles.edit} onClick={e => e.stopPropagation()}>
			<p>Are you sure to delete the log:</p>
			<p>{date + " , " + logText}</p>
			<div className={styles.buttons}>
				<Button buttonType="cancel" onClick={closeBackDrop} />
				<Button buttonType="add" />
			</div>
		</div>
	);
};
export default EditLog;
