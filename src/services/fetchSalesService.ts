import { Sale } from "../types";

export async function fetchSales(password: string): Promise<Sale[]> {
	let salesCollection: Sale[] = [];

	try {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/sales`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${password}`,
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch sales");
		}

		const data = await response.json();
		console.log(data);
		salesCollection = data;

		return salesCollection;
	} catch (error) {
		if (password === "") {
			console.error("No password input:", error);
			return [];
		}
		console.error("Error fetching sales:", error);
		throw error;
	}
}
