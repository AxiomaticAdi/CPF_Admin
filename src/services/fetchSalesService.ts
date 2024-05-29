import db from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Sale } from "../types";

export async function fetchSales(): Promise<Sale[]> {
	const salesCollection = collection(db, "Sales");

	try {
		const snapshot = await getDocs(salesCollection);
		const sales: Sale[] = [];

		snapshot.forEach((doc) => {
			const data = doc.data();

			const sale: Sale = {
				id: doc.id,
				eventId: data.EventDetails.eventId,
				ticketQuantity: data.EventDetails.numTickets,
				customerId: data.customerId,
			};
			sales.push(sale);
		});

		return sales;
	} catch (error) {
		console.error("Error fetching sales:", error);
		throw error; // rethrow the error after logging, or handle it as needed
	}
}
