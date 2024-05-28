import React, { useState } from "react";
import { z } from "zod";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import ReservationInfoForm from "./ReservationInfoForm";
import { verifyEventAvailability } from "../services/verifyAvailabilityService";
import { useNavigate } from "react-router-dom";

interface CheckoutFormProps {
	eventId: string;
	ticketQuantity: number;
}

const schema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.refine(
			(value) => value.trim().length > 0 && !/^[\s\p{P}]*$/u.test(value),
			{
				message: "Name must contain more than just spaces or punctuation.",
			}
		),
	email: z.string().email("Invalid email address"),
});

export default function CheckoutForm({
	eventId,
	ticketQuantity,
}: CheckoutFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const paymentElementOptions: StripePaymentElementOptions = {
		layout: "tabs",
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		// Validate form data using Zod
		const validationResult = schema.safeParse({ name, email });
		if (!validationResult.success) {
			setErrors({
				name: validationResult.error.formErrors.fieldErrors.name?.[0],
				email: validationResult.error.formErrors.fieldErrors.email?.[0],
			});
			setIsLoading(false);
			return;
		}

		setErrors({}); // Clear errors on successful validation

		// Verify event availability
		if (!(await verifyEventAvailability(eventId, ticketQuantity.toString()))) {
			alert(
				"Sorry, there is an issue with event availability. Please refresh the page."
			);
			setIsLoading(false);
			return;
		}

		// Proceed with Stripe payment confirmation
		const paymentResult = await stripe.confirmPayment({
			elements,
			redirect: "if_required",
			confirmParams: {
				receipt_email: email,
				shipping: {
					name: name,
					address: {
						line1: "15775 Castle Peak Lane",
						city: "Jamul",
						state: "CA",
						postal_code: "91935",
						country: "US",
					},
				},
			},
		});

		if (paymentResult.error) {
			// Show error to your customer (e.g., payment details incomplete)
			console.error(paymentResult.error.message);
		} else {
			// If payment succeeded redirect to success page
			if (paymentResult.paymentIntent.status === "succeeded") {
				console.log("Payment succeeded!");
				// Redirect to success page
				navigate("/order-complete");
			}
		}
		setIsLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<ReservationInfoForm
				name={name}
				email={email}
				setName={setName}
				setEmail={setEmail}
			/>
			{errors?.name && <p className="text-red-500">{errors.name}</p>}
			{errors?.email && <p className="text-red-500">{errors.email}</p>}
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			<button
				className="bg-green-600 hover:bg-green-800 text-white font-bold mt-2 py-2 px-4 rounded"
				type="submit"
				disabled={!stripe || !elements || isLoading}
			>
				Pay now
			</button>
		</form>
	);
}
