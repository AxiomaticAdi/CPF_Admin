export async function verifyEventAvailability(
	eventId: string,
	ticketQuantityStr: string
): Promise<boolean> {
	console.log("Verifying event availability...");
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/verify-event-availability`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				eventId: eventId,
				ticketQuantityStr: ticketQuantityStr,
			}),
		}
	);

	if (!response.ok) {
		console.log("Error verifying event availability");
		return false;
	}

	console.log("Event availability verified");
	return true;
}
