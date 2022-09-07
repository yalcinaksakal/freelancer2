import Input from "./Input/Input";

const TimeInput = ({ start, end, setEnd, setStart }) => {
	return (
		<div>
			<Input time={start} label="Start" setTime={setStart} />
			<Input time={end} label="End" setTime={setEnd} />
		</div>
	);
};
export default TimeInput;
