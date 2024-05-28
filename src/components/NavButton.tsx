import { useNavigate } from "react-router-dom";

interface NavButtonProps {
	buttonText: string;
	navigateTo: string;
}

export default function NavButton({ buttonText, navigateTo }: NavButtonProps) {
	const navigate = useNavigate();

	const goToPage = () => {
		navigate(navigateTo);
	};

	return (
		<button
			className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
			onClick={goToPage}
		>
			{buttonText}
		</button>
	);
}
