interface BadgeSoldOutProps {
	isSoldOut: boolean;
}

export default function BadgeSoldOut({ isSoldOut }: BadgeSoldOutProps) {
	if (!isSoldOut) return null;

	return (
		<div className="absolute top-4 right-4 bg-red-500 text-white font-light p-2 rounded-md text-sm z-10">
			Sold out
		</div>
	);
}
