import { useParams, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import { useContext, useState } from "react";
import EventsContext from "../contexts/EventsContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Event } from "../types";
import EventDetailsSection from "../components/EventDetailsSection";
import TicketSelect from "../components/TicketSelect";

export default function EventDetailsPage() {
	const { eventId } = useParams<{ eventId: string }>();
	const navigate = useNavigate();
	const { events: Events, isLoading } = useContext(EventsContext);
	const [ticketQuantity, setTicketQuantity] = useState(1);
	const [isReserving, setIsReserving] = useState(false);

	const event: Event | undefined = Events.find((c) => c.id === eventId);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	if (!eventId || !event) {
		return (
			<Page>
				<p>{!eventId ? "No event ID provided" : "Event not found"}</p>
			</Page>
		);
	}

	const handleReserve = () => {
		if (event.sold < event.capacity) {
			setIsReserving(true);
			// Navigate to checkout page after setting reservation state
			setTimeout(() => {
				navigate(`/checkout/${eventId}/${ticketQuantity}`);
				setIsReserving(false);
			}, 1000); // Simulating a reserve action
		} else {
			alert("Sorry, the event is fully booked.");
		}
	};

	const remainingTickets = event.capacity - event.sold;

	if (remainingTickets <= 0) {
		return (
			<Page>
				<div className="flex flex-col items-center">
					<EventDetailsSection event={event} />
					<h1 className="text-xl font-bold text-red-500 my-4">
						{" "}
						We're sorry, this event is fully booked!
					</h1>
				</div>
			</Page>
		);
	}

	return (
		<Page>
			<div className="flex flex-col items-center">
				<EventDetailsSection event={event} />
				<div className="flex flex-col gap-2 my-8">
					<h1 className="text-xl font-bold">Reserve now!</h1>
					<div className="flex justify-center gap-6">
						<TicketSelect
							remainingTickets={remainingTickets}
							ticketQuantity={ticketQuantity}
							setTicketQuantity={setTicketQuantity}
						/>
						<button
							className="w-32 bg-blue-500 shadow-md text-white rounded hover:bg-blue-700"
							onClick={handleReserve}
							disabled={isReserving || event.sold >= event.capacity}
						>
							{isReserving ? "Checking out..." : "Checkout"}
						</button>
					</div>
				</div>
				<div className="py-10"></div>
			</div>
		</Page>
	);
}
