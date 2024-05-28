import Footer from "./Footer";
import Navbar from "./Nav/NavBar";

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center max-w-4xl font-sans mx-auto text-center px-4 pb-8 justify-between h-screen w-screen">
			<div className="w-full">
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
