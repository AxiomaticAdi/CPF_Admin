import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers } from "../services/fetchCustomersService";
import { fetchSales } from "../services/fetchSalesService";
import { Customer, EventCustomer, Sale } from "../types";
import Page from "../components/Page";
import LoadingSpinner from "../components/LoadingSpinner";

const EventDetailsPage = () => {
	const { eventId } = useParams();

	const [customers, setCustomers] = useState<Customer[]>([]);
	const [sales, setSales] = useState<Sale[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const [eventCustomers, setEventCustomers] = useState<EventCustomer[]>([]);

	// Fetch customers and sales
	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedCustomers = await fetchCustomers();
				setCustomers(fetchedCustomers);
			} catch (error) {
				console.error("Error fetching customers:", error);
				alert("Error fetching customers");
				return;
			}

			try {
				const fetchedSales = await fetchSales();
				setSales(fetchedSales);
			} catch (error) {
				console.error("Error fetching sales:", error);
				alert("Error fetching sales");
				return;
			} finally {
				// Set loading state to false after all fetches
				setIsLoading(false);
			}
		};

		fetchData(); // Call the async function
	}, []);

	// Map sales to customers for given event
	useEffect(() => {
		if (!eventId) return;

		// Filter sales for the given event
		const salesForEvent = sales.filter((sale) => sale.eventId === eventId);

		console.log("Sales for event:", salesForEvent);

		// Map sales to customers
		const customersForEvent: EventCustomer[] = salesForEvent
			.map((sale) => {
				const customer = customers.find((cust) => cust.id === sale.customerId);
				if (!customer) return null; // In case customer not found, should be handled better in a real app
				return {
					eventId: eventId,
					customerId: customer.id,
					saleId: sale.id,
					name: customer.name,
					email: customer.email,
					ticketQuantity: sale.ticketQuantity,
				};
			})
			.filter(Boolean) as EventCustomer[]; // Filter out any null values

		setEventCustomers(customersForEvent);
	}, [eventId]);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	// Print event ID
	console.log("Event ID is:");
	console.log(eventId);

	// Print customers
	console.log("Customers are:");
	console.log(customers);

	// Print sales
	console.log("Sales are:");
	console.log(sales);

	// Print event customers
	console.log("Event Customers are:");
	console.log(eventCustomers);

	return (
		<Page>
			<table className="min-w-full divide-y divide-gray-200">
				<thead>
					<tr>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Customer Name
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Email
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Tickets Purchased
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Sale ID
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200 text-left">
					{eventCustomers.map((eventCustomer) => (
						<tr key={eventCustomer.saleId}>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{eventCustomer.name}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{eventCustomer.email}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{eventCustomer.ticketQuantity}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{eventCustomer.saleId}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Page>
	);
};

export default EventDetailsPage;
