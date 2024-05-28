interface CustomButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
}

export default function CustomButton({ onClick, children }: CustomButtonProps) {
	return (
		<button
			onClick={onClick}
			className="border p-2 rounded-md shadow hover:bg-gray-50"
		>
			{children}
		</button>
	);
}
