import Page from "../components/Page";

export default function AboutPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">About</h1>
			<div className="flex flex-col gap-12">
				{" "}
				<div className="flex flex-col items-center justify-center w-full gap-8">
					<h1 className="text-xl font-bold text-center">Chef</h1>
					<img src="/chef-mark.jpg" className="max-w-96 rounded-md" />
					<div className="flex flex-col gap-2 text-left">
						<p>
							Chef Mark Pelliccia's culinary journey started at the age of ten,
							when his family moved from New York City to San Diego and his
							father opened up the Italian restaurant Luigi’s at the Beach in
							Mission Beach, where Mark worked delivering pizzas up and down the
							boardwalk on his skateboard. After high school, 18-year-old Mark
							set out alone to Italy to attend culinary school at L’Istituto
							d’Istruzione Superiore per I’Enogastronomia e l’Ospitalita
							Alberghiera then completed a year-long pastry program at Etolie in
							Venice. He fell in love with the country, so after he completed
							his training, he decided to remain in Italy for a total of 16
							years, working under some of the best chef's in Europe. Upon
							returning to the US in 2008, he worked as Head Chef at Solare in
							Liberty Station, which was awarded Best New Restaurant. In 2010,
							he opened his own restaurant, 25forty Bistro and Bakehouse in Old
							Town, which was also named Best New Restaurant. His restaurant was
							renowned for blending modernist techniques with Old World
							traditions, featuring locally sourced, sustainable ingredients
							crafted into masterpieces. He has since been running a successful
							catering business and teaching culinary arts at a local college.
							In 2024, Mark received his Master's Degree in Hotel and Tourism
							Management. Chef Mark's cooking is a testament to his global
							travels and passion for fusion cuisine.
						</p>

						<p>
							Each class with Chef Pelliccia is more than a lesson in cooking;
							it's an invitation to explore a world of flavors and textures.
							Whether you're a seasoned foodie or a curious beginner, Mark's
							classes offer a unique opportunity to learn from a master chef who
							is in constant pursuit of his own professional development.
							Embrace the chance to transform simple ingredients into
							extraordinary meals and carry a piece of Mark's culinary wisdom
							with you.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full gap-8">
					<h1 className="text-xl font-bold text-center">Chief</h1>
					<img src="/chief-doreen.jpg" className="max-w-96 rounded-md" />
					<div className="flex flex-col gap-2 text-left">
						<p>
							With a strong background in both front-of-house and back-of-house
							operations, our Chief of Operations Doreen has mastered every
							aspect of running a successful establishment. Her commitment to
							excellence shines through in every event she organizes. But what
							truly sets her apart is her dedication to ensuring customer
							satisfaction. With over 10 plus years of experience in the food
							and hospitality industry and owner of her own restaurant and
							bakery, she brings a wealth of knowledge and passion to the table.
						</p>

						<p>
							As an advocate for locally sourced ingredients, Doreen ensures
							that Castle Peak Farm offers fresh, seasonal produce and meats.
							She believes in supporting local farmers and artisans, creating a
							sustainable and community-focused dining experience. Whether it’s
							a catered event or a cooking class, she exhibits a genuine love
							for food and customer experience. Her expertise, warm hospitality,
							and commitment to quality will leave a lasting impression on your
							guests.
						</p>
					</div>
				</div>
			</div>
		</Page>
	);
}
