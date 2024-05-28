import Page from "../components/Page";

export default function FaqPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">FAQ</h1>

			<div className="flex flex-col gap-6 text-center items-center">
				<div>
					<h2 className="text-xl font-semibold">
						Will there be alcoholic drinks served during my event?
					</h2>
					<p className="max-w-xl">
						We offer a rotating selection of wines by the glass and bottle, as
						well as craft beers. Your first drink is on us! Additional beverages
						can be purchased during your event.
					</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold">Are tickets refundable?</h2>
					<p className="max-w-xl">
						Tickets are non-refundable. However, if you can’t make the dinner,
						you are welcome to give or resell your tickets to someone else.
					</p>
				</div>
			</div>
		</Page>
	);
}
