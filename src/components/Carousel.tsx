import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface CarouselProps {
	children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	// Animation
	const [parent] = useAutoAnimate();

	// Display 3 items at a time
	const visibleItemCount = 2;
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + visibleItemCount < children.length
				? prevIndex + visibleItemCount
				: 0
		);
	};

	const prev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - visibleItemCount >= 0
				? prevIndex - visibleItemCount
				: children.length - visibleItemCount
		);
	};

	const visibleChildren = children.slice(
		currentIndex,
		currentIndex + visibleItemCount
	);

	return (
		<div className="flex items-center">
			<button onClick={prev} className="text-blue-400 p-2 m-2">
				<ArrowLeftCircleIcon className="h-12 w-12" />
			</button>
			<div ref={parent} className="flex gap-8">
				{visibleChildren.map((child, index) => (
					<div key={index} className="w-full">
						{child}
					</div>
				))}
			</div>
			<button onClick={next} className="text-blue-400 p-2 m-2">
				<ArrowRightCircleIcon className="h-12 w-12" />
			</button>
		</div>
	);
};

export default Carousel;
