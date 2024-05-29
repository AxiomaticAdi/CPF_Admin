import Page from "./components/Page";
import LoadingSpinner from "./components/LoadingSpinner";
import EventsTable from "./components/EventsTable";
import { useEffect, useState } from "react";
import { Event } from "./types";
import { fetchEvents } from "./services/fetchEventsService";

function App() {
	const [events, setEvents] = useState<Event[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedEvents = await fetchEvents();
				setEvents(fetchedEvents);
			} catch (error) {
				console.error("Error fetching events:", error);
				alert("Error fetching events");
				return;
			} finally {
				// Set loading state to false after all fetches
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<EventsTable events={events} />
		</Page>
	);
}

export default App;
