import { useState } from "react";

import NavList from "./components/Nav/NavList";
import PageContent from "./components/PageContent/PageContent";

function App() {
	const [curPage, setCurPage] = useState("logs"),
		changePage = page => setCurPage(page);
	return (
		<>
			<NavList cur={curPage} clicked={changePage} />
			<PageContent page={curPage} />
		</>
	);
}

export default App;
