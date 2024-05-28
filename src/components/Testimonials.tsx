const testimonials = [
	[
		[
			{
				body: "Attending a farm-to-table dinner event was an unforgettable date experience! Amazing, fresh, vibrant and delicious food that had our last restaurant experience completely beat. Highly recommended!",
				author: {
					name: "Leslie Alexander",
					handle: "lesliealexander",
					imageUrl:
						"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
		],
		[
			{
				body: "Chef Mark's charisma and humor are the soul of these cooking classes. His storytelling from years of professional chef experience, paired with expert cooking tips, made the whole experience both educational and fun!",
				author: {
					name: "Adi Rudra",
					handle: "adiexplores",
					imageUrl: "/instagram/adiexplores.jpeg",
				},
			},
		],
	],
	[
		[
			{
				body: "The serene setting of the farm added so much to the cooking class. Cooking in the middle of nature, with the sounds of the farm and the scent of fresh earth made it a truly grounding experience. It's a perfect escape from the city!",
				author: {
					name: "Bill Clefford",
					handle: "billplease61",
					imageUrl:
						"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
		],
		[
			{
				body: "I loved how the class was structured! Starting from the basics of choosing the right ingredients on the farm to complex cooking techniques, Chef Mark ensured that everyone, regardless of their cooking level, learned something valuable.",
				author: {
					name: "Leonard Krasner",
					handle: "leonardkrasner",
					imageUrl:
						"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			},
		],
	],
];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
				{testimonials.map((columnGroup, columnGroupIdx) => (
					<div
						key={columnGroupIdx}
						className="space-y-8 xl:contents xl:space-y-0"
					>
						{columnGroup.map((column, columnIdx) => (
							<div
								key={columnIdx}
								className={classNames(
									(columnGroupIdx === 0 && columnIdx === 0) ||
										(columnGroupIdx === testimonials.length - 1 &&
											columnIdx === columnGroup.length - 1)
										? "xl:row-span-2"
										: "xl:row-start-1",
									"space-y-8"
								)}
							>
								{column.map((testimonial) => (
									<figure
										key={testimonial.author.handle}
										className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
									>
										<blockquote className="text-gray-900">
											<p>{`“${testimonial.body}”`}</p>
										</blockquote>
										<figcaption className="mt-6 flex items-center gap-x-4">
											<img
												className="h-10 w-10 rounded-full bg-gray-50"
												src={testimonial.author.imageUrl}
												alt=""
											/>
											<div className="text-left">
												<div className="font-semibold">
													{testimonial.author.name}
												</div>
												<div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
											</div>
										</figcaption>
									</figure>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
