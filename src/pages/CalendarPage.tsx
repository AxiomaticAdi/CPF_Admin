import { useContext, useState } from "react";
import EventsContext from "../contexts/EventsContext";
import Calendar from "react-calendar";
import Page from "../components/Page";
import { compareDates } from "../logic/dateLogic";
import "../styles/Calendar.css";
import EventCard from "../components/EventCard";
import LoadingSpinner from "../components/LoadingSpinner";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
	const [value, onChange] = useState<Value>(new Date());
	const { events: events, isLoading } = useContext(EventsContext);

	interface TileContentProps {
		activeStartDate: Date;
		date: Date;
		view: string;
	}

	const decorateEventDates = ({ date, view }: TileContentProps) => {
		if (view !== "month") return false;

		let dayHasEvent = false;

		for (let i = 0; i < events.length; i++) {
			const eventDate = events[i].startTime;
			if (compareDates(date, eventDate)) {
				dayHasEvent = true;
				break;
			}
		}
		return !dayHasEvent;
	};

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-4xl font-bold my-8">Event Calendar</h1>
			<Calendar
				onChange={onChange}
				value={value}
				defaultView="month"
				tileDisabled={decorateEventDates}
			/>
			<div className="flex flex-row flex-wrap gap-4 my-8">
				{value instanceof Date &&
					events
						.filter((event) => {
							const classDate = event.startTime;
							return (
								classDate.getFullYear() === value.getFullYear() &&
								classDate.getMonth() === value.getMonth() &&
								classDate.getDate() === value.getDate()
							);
						})
						.map((event) => <EventCard key={event.id} event={event} />)}
			</div>
		</Page>
	);
}
