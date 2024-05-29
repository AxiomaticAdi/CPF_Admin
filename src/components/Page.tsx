import Footer from "./Footer";
import Navbar from "./Nav/NavBar";

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center max-w-4xl font-sans mx-auto text-center px-4 pb-8 justify-between h-screen w-screen">
			<div className="w-full">
				<div className="text-red-500 sm:hidden">
					<p className="mt-6">
						<span className="font-bold">WARNING:</span> admin pages are not
						mobile optimized, please view on a larger screen for the intended
						experience
					</p>
				</div>
				<Navbar />
			</div>
			<div className="flex flex-col w-full items-center mx-auto text-center flex-grow">
				{children}
			</div>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
}
