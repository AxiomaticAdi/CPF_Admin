import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSales } from "../services/fetchSalesService";
import { Customer, EventCustomer, Sale } from "../types";
import Page from "../components/Page";
import LoadingSpinner from "../components/LoadingSpinner";
import PasswordInput from "../components/PasswordInput";
import { fetchCustomers } from "../services/fetchCustomersService";

const EventDetailsPage = () => {
	const { eventId } = useParams();

	const [sales, setSales] = useState<Sale[]>([]);
	const [customers, setCustomers] = useState<Customer[]>([]);
	const [eventCustomers, setEventCustomers] = useState<EventCustomer[]>([]);

	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Fetch sales whenever password changes
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const fetchedSales: Sale[] = await fetchSales(password);
				setSales(fetchedSales);
			} catch (error) {
				console.error("Error fetching sales:", error);
				alert("Error fetching sales");
			} finally {
				setIsLoading(false);
			}

			try {
				const fetchedCustomers: Customer[] = await fetchCustomers(password);
				setCustomers(fetchedCustomers);
			} catch (error) {
				console.error("Error fetching customers:", error);
				alert("Error fetching customers");
			} finally {
				setIsLoading(false);
			}
		};

		if (password) {
			fetchData();
		}
	}, [password]);

	// Map sales to customers for given event
	useEffect(() => {
		if (!eventId) {
			console.log("No event ID provided");
			return;
		}

		// Filter sales for the given event
		const salesForEvent = sales.filter((sale) => sale.eventId === eventId);

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
	}, [eventId, customers, sales]);
	return (
		<Page>
			<PasswordInput setPassword={setPassword} />
			{isLoading ? (
				<div className="flex justify-center mt-8">
					<LoadingSpinner />
				</div>
			) : (
				<table className="min-w-full divide-y divide-gray-200 mt-8">
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
			)}
		</Page>
	);
};

export default EventDetailsPage;
