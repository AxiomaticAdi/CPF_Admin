import React from "react";

interface TicketSelectProps {
	remainingTickets: number;
	ticketQuantity: number;
	setTicketQuantity: React.Dispatch<React.SetStateAction<number>>;
}

function isTicketPlural(ticketQuantity: number) {
	return ticketQuantity > 1 ? "Tickets" : "Ticket";
}

export default function TicketSelect({
	remainingTickets,
	ticketQuantity,
	setTicketQuantity,
}: TicketSelectProps) {
	// Don't show the dropdown if there are no tickets left
	if (remainingTickets <= 0) {
		return <div className="text-red-500">Sold out</div>;
	}

	// Generate an array of ticket numbers (1 through remainingTickets)
	const ticketOptions = Array.from(
		{ length: remainingTickets },
		(_, index) => index + 1
	);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setTicketQuantity(parseInt(event.target.value, 10));
	};

	return (
		<div>
			<select
				value={ticketQuantity}
				onChange={handleChange}
				className="block w-32 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
			>
				{ticketOptions.map((ticketNumber) => (
					<option key={ticketNumber} value={ticketNumber}>
						{ticketNumber} {isTicketPlural(ticketNumber)}
					</option>
				))}
			</select>
		</div>
	);
}
