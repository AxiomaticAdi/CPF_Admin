import { Link, NavLink } from "react-router-dom";
import { CustomLink } from "./NavBar";

interface WebMenuProps {
	links: CustomLink[];
}
export default function WebMenu({ links }: WebMenuProps) {
	// Calculate the middle index to split the links
	const middleIndex = Math.floor(links.length / 2);
	const firstHalfLinks = links.slice(0, middleIndex);
	const secondHalfLinks = links.slice(middleIndex);

	return (
		<div className="hidden mx-auto sm:block">
			<div className="flex gap-6 text-zinc-400 items-center">
				{firstHalfLinks.map(({ text, path }, index) => (
					<NavLink
						key={index}
						to={path}
						className={({ isActive }) =>
							[
								"hover:text-teal-800 cursor-pointer w-20 text-center",
								isActive ? "text-black" : "",
							].join(" ")
						}
					>
						{text}
					</NavLink>
				))}

				<Link className="mx-auto flex-none" to={"/"}>
					<img
						src={"cpf_logo.webp"}
						alt="Castle Peak Farms Logo"
						className="h-44 w-44"
					/>
				</Link>

				{secondHalfLinks.map(({ text, path }, index) => (
					<NavLink
						key={index}
						to={path}
						className={({ isActive }) =>
							[
								"hover:text-teal-800 cursor-pointer w-20 text-center",
								isActive ? "text-black" : "",
							].join(" ")
						}
					>
						{text}
					</NavLink>
				))}
			</div>
		</div>
	);
}
