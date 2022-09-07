import styles from "./Heading.module.scss";

const Heading = () => {
	return (
		<div className={styles.log}>
			<div className={styles.no}>NO</div>
			<div className={styles.date}>DATE</div>
			<div className={styles.total}>TOTAL</div>
		</div>
	);
};
export default Heading;
