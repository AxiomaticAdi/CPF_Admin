import React from "react";

interface VideoHeroProps {
	videoSource: string; // URL of the video
}

const VideoHero: React.FC<VideoHeroProps> = ({ videoSource }) => {
	return (
		<div className="relative w-full overflow-hidden">
			<video
				className="w-full h-full object-cover"
				src={videoSource}
				autoPlay
				loop
				muted
				playsInline
			>
				Your browser does not support the video tag.
			</video>
			<div className="absolute z-10 inset-0 flex flex-col items-center justify-center">
				<h1 className="text-4xl font-bold text-black mb-8">
					Reserve your seat
				</h1>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Book now
				</button>
			</div>
		</div>
	);
};

export default VideoHero;
