import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import EventsContext from "../contexts/EventsContext";
import Page from "../components/Page";
import { Event } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import EventDetailsSection from "../components/EventDetailsSection";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage: React.FC = () => {
	const { eventId, ticketQuantity } = useParams<{
		eventId: string;
		ticketQuantity: string;
	}>();
	const { events: events, isLoading } = useContext(EventsContext);
	const [clientSecret, setClientSecret] = useState<string | null>(null);

	const ticketQuantityNum = parseInt(ticketQuantity || "0");

	useEffect(() => {
		const fetchPaymentIntent = async () => {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/create-payment-intent`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ eventId, numTickets: ticketQuantityNum }),
				}
			);
			const data = await response.json();
			setClientSecret(data.clientSecret);
		};

		if (eventId && ticketQuantityNum > 0) {
			fetchPaymentIntent();
		}
	}, [eventId, ticketQuantityNum]);

	if (isLoading) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	if (!eventId || isNaN(ticketQuantityNum) || ticketQuantityNum < 1) {
		return (
			<Page>
				<p>Error: Invalid URL parameters</p>
			</Page>
		);
	}

	const event: Event | undefined = events.find((e: Event) => e.id === eventId);

	// Verify that the event ID and ticket quantity are valid
	if (!event) {
		return (
			<Page>
				<p>Error: Event not found</p>
			</Page>
		);
	}
	const remainingTickets = event.capacity - event.sold;
	if (ticketQuantityNum < 1) {
		return (
			<Page>
				<p>Error: Invalid ticket quantity provided</p>
			</Page>
		);
	}
	if (remainingTickets <= 0 || ticketQuantityNum > remainingTickets) {
		return (
			<Page>
				<div className="flex flex-col gap-4 mx-4">
					<p>
						We're sorry! There aren't enough tickets available for {event.name}{" "}
						on {new Date(event.startTime).toLocaleDateString("en-US", {})}
					</p>
					<p>Quantity requested: {ticketQuantityNum}</p>
					<p>Remaining tickets: {remainingTickets}</p>
				</div>
			</Page>
		);
	}

	if (!clientSecret) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<h1 className="text-4xl font-bold">Checkout</h1>
			<div className="my-2">
				<p>Requested tickets: {ticketQuantityNum}</p>
				<p className="font-bold text-green-600">
					Total price: ${ticketQuantityNum * event.price}
				</p>
			</div>

			<div className="flex flex-wrap gap-4 my-6 justify-center">
				<div className="flex flex-col gap-4 mx-4 md:w-96">
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckoutForm
							eventId={eventId}
							ticketQuantity={ticketQuantityNum}
						/>
					</Elements>
				</div>

				<div className="flex flex-col gap-4 mx-4 md:w-96">
					<EventDetailsSection event={event} />
				</div>
			</div>
		</Page>
	);
};

export default CheckoutPage;
