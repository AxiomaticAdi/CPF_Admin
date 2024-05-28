import Page from "./components/Page";
import LoadingSpinner from "./components/LoadingSpinner";
import EventsTable from "./components/EventsTable";
import { useEffect, useState } from "react";
import { Customer, Event, Sale } from "./types";
import { fetchEvents } from "./services/fetchEventsService";
import { fetchSales } from "./services/fetchSalesService";
import { fetchCustomers } from "./services/fetchCustomersService";

function App() {
	const [customers, setCustomers] = useState<Customer[]>([]);
	const [events, setEvents] = useState<Event[]>([]);
	const [sales, setSales] = useState<Sale[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedCustomers = await fetchCustomers();
				setCustomers(fetchedCustomers);
			} catch (error) {
				console.error("Error fetching customers:", error);
				alert("Error fetching customers");
				return;
			}

			try {
				const fetchedEvents = await fetchEvents();
				setEvents(fetchedEvents);
			} catch (error) {
				console.error("Error fetching events:", error);
				alert("Error fetching events");
				return;
			}

			try {
				const fetchedSales = await fetchSales();
				setSales(fetchedSales);
			} catch (error) {
				console.error("Error fetching sales:", error);
				alert("Error fetching sales");
				return;
			} finally {
				// Set loading state to false after all fetches
				setIsLoading(false);
			}
		};

		fetchData(); // Call the async function
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
