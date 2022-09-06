import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./BackDrop.module.scss";
const modalRoot = document.getElementById("overlays");

const BackDrop = ({ children, clicked }) => {
	const el = useRef(document.createElement("div"));
	useEffect(() => {
		const current = el.current;
		modalRoot.appendChild(current);
		return () => modalRoot.removeChild(current);
	}, []);

	return createPortal(
		<div onClick={clicked} className={styles.backDrop}>
			{children}
		</div>,
		el.current
	);
};

export default BackDrop;
