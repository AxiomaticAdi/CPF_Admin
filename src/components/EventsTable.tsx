import React from "react";
import { Event } from "../types";

type EventsTableProps = {
	events: Event[];
};

const formatTime = (date: Date): string => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	}).format(date);
};

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b">Event Name</th>
						<th className="py-2 px-4 border-b">Start Date</th>
						<th className="py-2 px-4 border-b">Start Time</th>
						<th className="py-2 px-4 border-b">Price</th>
						<th className="py-2 px-4 border-b">Capacity</th>
						<th className="py-2 px-4 border-b">Tickets Sold</th>
					</tr>
				</thead>
				<tbody>
					{events.map((event) => (
						<tr key={event.id} className="hover:bg-gray-100">
							<td className="py-2 px-4 border-b">{event.name}</td>
							<td className="py-2 px-4 border-b">
								{new Date(event.startTime).toLocaleDateString()}
							</td>
							<td className="py-2 px-4 border-b">
								{formatTime(new Date(event.startTime))}
							</td>
							<td className="py-2 px-4 border-b">${event.price.toFixed(2)}</td>
							<td className="py-2 px-4 border-b">{event.capacity}</td>
							<td className="py-2 px-4 border-b">{event.sold}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EventsTable;
