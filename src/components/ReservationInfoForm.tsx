interface ReservationInfoFormProps {
	name: string;
	email: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function ReservationInfoForm({
	name,
	email,
	setName,
	setEmail,
}: ReservationInfoFormProps) {
	// TODO: Add email validation
	// TODO: Add name validation

	return (
		<div className="flex flex-col gap-2 my-2">
			<div>
				<label htmlFor="name" className="block text-left text-gray-700">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="John Doe"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					required
				/>
			</div>
			<div>
				<label htmlFor="email" className="block text-left text-gray-700">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="abcd@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					required
				/>
			</div>
		</div>
	);
}
