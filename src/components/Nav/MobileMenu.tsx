import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { CustomLink } from "./NavBar";

interface MobileMenuProps {
	links: CustomLink[];
}
export default function MobileMenu({ links }: MobileMenuProps) {
	return (
		<div className="flex flex-col items-center w-full sm:hidden">
			<div className="ml-auto mr-4">
				<Popover>
					<Popover.Button className="group flex items-center rounded-full bg-white px-4 py-2 font-medium shadow-md backdrop-blur text-zinc-400 border-zinc-300">
						<Bars3Icon className="h-6 w-6" />
					</Popover.Button>
					<Transition.Root>
						<Transition.Child
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Popover.Overlay className="fixed inset-0 z-50 backdrop-blur-sm" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								focus
								className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8"
							>
								<div className="flex flex-row-reverse items-center justify-between">
									<Popover.Button aria-label="Close menu" className="-m-1 p-1">
										<XMarkIcon className="h-6 w-6" />
									</Popover.Button>
								</div>
								<nav className="mt-6">
									<ul className="flex flex-col gap-4 items-center">
										{links.map(({ text, path }, index) => (
											<li key={index}>
												<NavLink
													to={path}
													end
													className={({ isActive }) =>
														[
															"hover:text-teal-800 cursor-pointer",
															isActive ? "text-black" : "text-zinc-400",
														].join(" ")
													}
												>
													{text}
												</NavLink>
											</li>
										))}
									</ul>
								</nav>
							</Popover.Panel>
						</Transition.Child>
					</Transition.Root>
				</Popover>
			</div>
			<div className="mx-auto">
				<img
					src={"cpf_logo.webp"}
					alt="Castle Peak Farms Logo"
					className="h-44 w-44"
				/>
			</div>
		</div>
	);
}
