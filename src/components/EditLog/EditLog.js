import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTime } from "../../helpers/getTime";
import { logActions } from "../../store/logsSlice";
import Button from "../Button/Button";
import TimeInput from "../TimeInput/TimeInput";
import styles from "./EditLog.module.scss";

const EditLog = ({ date, index, logText, log, closeBackDrop }) => {
	const [start, setStart] = useState(getTime(log[0])),
		[end, setEnd] = useState(getTime(log[1])),
		[err, setErr] = useState(""),
		inputProps = { start, end, setEnd, setStart },
		dispatch = useDispatch(),
		handleEdit = () => {
			if (start >= end) {
				setErr("End can't be earlier than start!");
				return;
			}
			dispatch(logActions.editLog({ date, index, start, end }));
			closeBackDrop();
		};

	return (
		<div className={styles.edit} onClick={e => e.stopPropagation()}>
			<p>Editing work log:</p>
			<p>{date + " : " + logText}</p>
			<p style={{ color: "red", minHeight: "30px" }}>{err}</p>
			<TimeInput {...inputProps} />
			<div className={styles.buttons}>
				<Button buttonType="cancel" onClick={closeBackDrop} />
				<Button buttonType="edit" onClick={handleEdit} />
			</div>
		</div>
	);
};
export default EditLog;
