import styles from "./NavList.module.scss";
import NavItem from "./NavItem/NavItem";

import { SVGs } from "../../SVGs/svg";
const NavList = ({ clicked, cur }) => {
	return (
		<div className={styles.nav}>
			<ul className={styles.list}>
				{Object.values(SVGs).map((listItem, index) => {
					return (
						<NavItem
							key={index}
							item={listItem.name}
							svg={listItem.svg}
							desc={listItem.description}
							isActive={cur === listItem.name}
							clicked={clicked}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default NavList;
