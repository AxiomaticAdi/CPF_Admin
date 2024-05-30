import { Customer } from "../types";

export async function fetchCustomers(password: string): Promise<Customer[]> {
	let customersCollection: Customer[] = [];

	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/customers`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${password}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error("Failed to fetch customers");
		}

		const data = await response.json();
		console.log(data);
		customersCollection = data;

		return customersCollection;
	} catch (error) {
		if (password === "") {
			console.error("No password input:", error);
			return [];
		}
		console.error("Error fetching customers:", error);
		throw error;
	}
}
