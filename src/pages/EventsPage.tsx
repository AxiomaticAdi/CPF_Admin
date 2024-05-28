import { useContext } from "react";
import EventCard from "../components/EventCard";
import Page from "../components/Page";
import EventsContext from "../contexts/EventsContext";
import LoadingSpinner from "../components/LoadingSpinner";

export default function EventsPage() {
	const { events: events, isLoading } = useContext(EventsContext);

	return (
		<Page>
			<div className="flex flex-col items-center gap-8 mb-48">
				<h1 className="text-4xl font-bold my-8">Upcoming events</h1>
				<div className="flex flex-wrap gap-8 items-center justify-center">
					{isLoading ? (
						<LoadingSpinner />
					) : (
						events.map((event) => <EventCard key={event.id} event={event} />)
					)}
				</div>
			</div>
		</Page>
	);
}
