import db from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Event } from "../types";

export async function fetchEvents(): Promise<Event[]> {
	const eventsCollection = collection(db, "Events");

	try {
		const snapshot = await getDocs(eventsCollection);
		const events: Event[] = [];

		snapshot.forEach((doc) => {
			const data = doc.data();

			// Convert Firestore timestamp to JavaScript Date
			const startTime = data.StartDateTime.toDate();
			const endTime = data.EndDateTime.toDate();

			const eventItem: Event = {
				id: doc.id,
				name: data.Name,
				description: data.Description,
				imageUrl: data.ImageUrl,
				startTime: startTime,
				endTime: endTime,
				capacity: data.Capacity,
				sold: data.Sold,
				price: data.Price,
			};
			events.push(eventItem);
		});

		return events;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error; // rethrow the error after logging, or handle it as needed
	}
}
