import { Link } from "react-router-dom";
import { Event } from "../types";
import BadgeSoldOut from "./Badges/BadgeSoldOut";

interface EventCardProps {
	event: Event;
}

export default function EventCard({ event }: EventCardProps) {
	const isSoldOut: boolean = event.capacity - event.sold < 1;

	return (
		<Link to={`/events/${event.id}`}>
			<div className="relative flex flex-col items-center justify-center h-96 w-64 rounded-md overflow-hidden hover:scale-105">
				<BadgeSoldOut isSoldOut={isSoldOut} />
				<img
					src={event.imageUrl}
					alt="Event"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				{/* Gradient Overlay */}
				<div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-t from-black to-transparent">
					<div className="flex h-full justify-center items-end py-4">
						<h1 className="text-xl font-bold text-white">{event.name}</h1>
					</div>
				</div>
			</div>
		</Link>
	);
}
