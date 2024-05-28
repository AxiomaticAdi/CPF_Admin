import Page from "../components/Page";

// TODO: Remove temporary note when Stripe is in production mode

export default function OrderSuccessPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">Order complete</h1>
			<img className="w-96 rounded-md" src="/order_complete.png" />
			<div className="flex flex-col gap-6 text-gray-600 max-w-96">
				<p>
					Thank you for your purchase. A receipt has been sent directly to your
					email. We are excited to get cooking with you soon!
				</p>
				<p>
					<span className="font-bold text-red-500">Temporary note:</span> Stripe
					is currently in testing mode and therefore does not send emails
				</p>
			</div>
		</Page>
	);
}
