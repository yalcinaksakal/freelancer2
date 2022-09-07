import WorkLogs from "../WorkLogs/WorkLogs";

const PageContent = ({ page }) => {
	let content;
	switch (page) {
		case "logs":
			content = <WorkLogs />;
			break;
		case "add":
			content = <div>add</div>;
			break;
		case "eval":
			content = <div>eval</div>;
			break;
		default:
			content = <div>Page not found!</div>;
			break;
	}

	return content;
};
export default PageContent;
