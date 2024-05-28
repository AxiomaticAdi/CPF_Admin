import db from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Customer } from "../types";

export async function fetchCustomers(): Promise<Customer[]> {
	const customersCollection = collection(db, "Customers");

	try {
		const snapshot = await getDocs(customersCollection);
		const customers: Customer[] = [];

		snapshot.forEach((doc) => {
			const data = doc.data();

			const customer: Customer = {
				id: doc.id,
				name: data.Name,
				email: data.Email,
			};
			customers.push(customer);
		});

		return customers;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error; // rethrow the error after logging, or handle it as needed
	}
}
