import { useContext } from "react";
import Page from "./components/Page";
import EventsContext from "./contexts/EventsContext";
import LoadingSpinner from "./components/LoadingSpinner";
import EventsTable from "./components/EventsTable";

function App() {
	const { events: Events, isLoading } = useContext(EventsContext);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<EventsTable events={Events} />
		</Page>
	);
}

export default App;
