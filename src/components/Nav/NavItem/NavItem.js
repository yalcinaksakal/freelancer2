import styles from "./NavItem.module.scss";

import { useState } from "react";

const NavItem = ({ item, svg, desc, isActive, clicked }) => {
	const [showDetails, setShowDetails] = useState(false),
		svgJSX = (
			<svg width="25" height="25" viewBox="0 0 25 25">
				{svg}
			</svg>
		),
		style = {
			"--transfer": item === "logs" ? "-12%" : "-40%",
		};
	return (
		<li
			className={`${styles.item} ${isActive ? styles.active : ""}`}
			onMouseEnter={() => setShowDetails(true)}
			onMouseLeave={() => setShowDetails(false)}
			onClick={() => clicked(item)}
		>
			{svgJSX}
			{showDetails && !isActive && (
				<div className={styles.navItemDetail} style={style}>
					{desc}
				</div>
			)}
		</li>
	);
};

export default NavItem;
