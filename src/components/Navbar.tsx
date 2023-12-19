import { useState } from "react";
import logo from "/logo.jpg";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

interface INavProps {
	name: string;
	path: string;
}

const navLinks: INavProps[] = [
	{
		name: `${logo}`,
		path: "/",
	},
	{
		name: "History",
		path: "/#history",
	},
	{
		name: "Team",
		path: "/#team",
	},
];

const Navbar = () => {
	const [modal, setModal] = useState(false);

	return (
		<nav className="flex items-center justify-between w-full bg-[transparent] gap-4 min-h-[5rem] max-w-[100rem] mx-auto">
			<div className="hidden md:flex flex-row items-center justify-between w-full">
				<div className="flex items-center justify-center w-full max-w-[2rem]">
					<a href={navLinks[0].path} className="w-full">
						<img
							src={navLinks[0].name}
							alt="Logo"
							className="w-full max-h-[2rem] rounded-full"
						/>
					</a>
				</div>

				<div className="hidden lg:flex items-center justify-end w-full max-w-[50rem] gap-4">
					<ul className="flex flex-row items-center justify-around w-full max-w-[25rem]">
						{navLinks
							.slice(1, navLinks.length)
							.map((navLink: INavProps, index: number) => (
								<li key={navLink.name}>
									<a
										href={navLink.path}
										className="font-semibold text-base text-white underline hover:no-underline"
									>
										{(index + 1).toString().padStart(2, "0")} {navLink.name}
									</a>
								</li>
							))}
					</ul>
				</div>
			</div>

			{/*NAVS MOBILE VIEW */}
			<div className="block lg:hidden relative">
				<button type="button" onClick={() => setModal(true)}>
					<RiMenu4Fill className="text-white font-bold w-10 h-10" />
				</button>

				<div
					className={
						modal
							? "fixed z-50 right-0 top-0 h-full bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
							: "fixed z-50 right-[-100%] h-full top-0 bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
					}
				>
					<div className="flex flex-col gap-8">
						<button
							type="button"
							onClick={() => setModal(false)}
							className="styled-border self-end"
						>
							<AiOutlineClose className="text-white font-bold w-8 h-8" />
						</button>
						<ul className="flex flex-col gap-8 text-lg">
							{navLinks.slice(1, navLinks.length).map((navLink: INavProps) => (
								<li key={navLink.name} className="w-full min-h-[2.5rem]">
									{navLink.path.startsWith("#") ? (
										<a
											href={navLink.path}
											onClick={() => setModal(false)}
											className="text-white font-medium text-lg"
										>
											{navLink.name}
										</a>
									) : (
										<a
											href={navLink.path}
											onClick={() => setModal(false)}
											className="text-white font-medium text-lg"
										>
											{navLink.name}
										</a>
									)}
								</li>
							))}
						</ul>
						<div className="w-full max-w-[10rem]">
							<button type="button">Click Me</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
