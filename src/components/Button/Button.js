import "./Button.styles.scss";

const Button = ({ buttonType, ...otherProps }) => {
	return (
		<button className={`button-container ${buttonType}`} {...otherProps}>
			{buttonType.toUpperCase()}
		</button>
	);
};

export default Button;
