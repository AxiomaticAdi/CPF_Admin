import { useState } from "react";

interface PasswordInputProps {
	setPassword: (value: string) => void;
}

export default function PasswordInput({ setPassword }: PasswordInputProps) {
	const [inputValue, setInputValue] = useState("");

	const onClick = () => {
		setPassword(inputValue);
		setInputValue("");
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="bg-white shadow sm:rounded-lg">
			<div className="px-4 py-5 sm:p-6">
				<h3 className="text-base font-semibold leading-6 text-gray-900">
					Password
				</h3>
				<div className="mt-2 max-w-xl text-sm text-gray-500">
					<p className="text-balance">
						Table will also appear blank if password is incorrect.
					</p>
					<p>Enter the admin password.</p>
				</div>
				<div className="mt-5 flex justify-center">
					<div className="flex justify-center">
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							value={inputValue}
							onChange={handleInputChange}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Enter password"
						/>
					</div>
					<button
						onClick={onClick}
						className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
					>
						Load
					</button>
				</div>
			</div>
		</div>
	);
}
