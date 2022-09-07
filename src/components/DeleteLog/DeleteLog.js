import { useDispatch } from "react-redux";
import { logActions } from "../../store/logsSlice";
import Button from "../Button/Button";
import styles from "./DeleteLog.module.scss";

const DeleteLog = ({ date, index, logText, log, closeBackDrop }) => {
	const dispatch = useDispatch(),
		handleDelete = () => {
			closeBackDrop();
			dispatch(logActions.deleteLog({ date, index }));
		};
	return (
		<div className={styles.delete} onClick={e => e.stopPropagation()}>
			<p>Are you sure to delete the log:</p>
			<p>{date + " , " + logText}</p>
			<div className={styles.buttons}>
				<Button buttonType="cancel" onClick={closeBackDrop} />
				<Button buttonType="delete" onClick={handleDelete} />
			</div>
		</div>
	);
};
export default DeleteLog;
