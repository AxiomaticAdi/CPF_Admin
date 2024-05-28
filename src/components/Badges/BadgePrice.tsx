interface BadgePriceProps {
	price: number;
}

export default function BadgePrice({ price }: BadgePriceProps) {
	return (
		<div className="absolute top-4 right-4 bg-black text-white font-light p-2 rounded-md text-sm z-10 opacity-80">
			<div className="text-xl opacity-100">${price}</div>
		</div>
	);
}
