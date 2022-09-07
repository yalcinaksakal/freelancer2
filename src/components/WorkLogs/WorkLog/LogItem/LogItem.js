import styles from "./LogItem.module.scss";
import Button from "../../../Button/Button";
import { getDuration, getTime } from "../../../../helpers/getTime";
import { useState } from "react";
import BackDrop from "../../../Backdrop/BackDrop";
import DeleteLog from "../../../DeleteLog/DeleteLog";
import EditLog from "../../../EditLog/EditLog";

const LogItem = ({ log, date, changeSlot, index }) => {
	const [isEdit, setIsEdit] = useState(false),
		[isDelete, setIsDelete] = useState(false),
		deleteClicked = () => setIsDelete(true),
		editClicked = () => setIsEdit(true),
		closeBackDrop = () => {
			setIsDelete(false);
			setIsEdit(false);
		},
		logText =
			log.map(t => getTime(t)).join(" - ") + " " + getDuration(log[1] - log[0]),
		modalProps = { date, index, logText, log, closeBackDrop };
	return isDelete || isEdit ? (
		<BackDrop clicked={closeBackDrop}>
			{isDelete ? <DeleteLog {...modalProps} /> : <EditLog {...modalProps} />}
		</BackDrop>
	) : (
		<div className={styles.container} onMouseEnter={() => changeSlot(index)}>
			<div className={styles.time}>{logText}</div>
			<div className={styles.buttons}>
				<Button buttonType="edit" onClick={editClicked} />
				<Button buttonType="delete" onClick={deleteClicked} />
			</div>
		</div>
	);
};
export default LogItem;
