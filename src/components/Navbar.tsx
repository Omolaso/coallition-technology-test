import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks, INavProps } from "./NavLinks";
import sidebarBg from "/slider-image1.jpg";

interface IProps {
	isVisible: boolean;
}

const Navbar = ({ isVisible }: IProps) => {
	const [modal, setModal] = useState<boolean>(false);

	return (
		<nav className="flex items-center justify-between w-full bg-[transparent] gap-4 min-h-[5rem] max-h-[6rem]">
			<div className="hidden lg:flex flex-row items-center justify-between w-full max-w-[100rem] mx-auto px-4 md:px-8 py-2">
				<div
					className={
						isVisible
							? " opacity-100 duration-500 ease-linear flex items-center justify-center w-full max-w-[2rem]"
							: "opacity-10 duration-500 ease-linear flex items-center justify-center w-full max-w-[2rem]"
					}
				>
					<a href={navLinks[0].path} className="w-full">
						<img
							src={navLinks[0].name}
							alt="Logo"
							loading="lazy"
							className="w-full max-h-[2rem] rounded-full"
						/>
					</a>
				</div>

				<div className="hidden lg:flex items-center justify-end w-full gap-4">
					<ul className="flex flex-row items-center justify-between w-full max-w-[20rem]">
						{navLinks
							.slice(1, navLinks.length)
							.map((navLink: INavProps, index: number) => (
								<li key={navLink.name}>
									<a
										href={navLink.path}
										className={
											isVisible
												? "duration-500 ease-linear font-semibold text-base text-white italic underline hover:no-underline"
												: " translate-y-[-100%] duration-500 ease-linear font-semibold text-base text-white italic underline hover:no-underline"
										}
									>
										{(index + 1).toString().padStart(2, "0")}. {navLink.name}
									</a>
								</li>
							))}
					</ul>
				</div>
			</div>

			{/*NAVS MOBILE VIEW */}
			<div className="block lg:hidden relative w-full">
				<div className="flex flex-row items-center justify-between w-full px-4 md:px-8 py-2">
					<div className="flex items-center justify-center w-full max-w-[2rem]">
						<a href={navLinks[0].path} className="w-full">
							<img
								src={navLinks[0].name}
								alt="Logo"
								className="w-full max-h-[2rem] rounded-full"
							/>
						</a>
					</div>

					<button type="button" onClick={() => setModal(true)}>
						<RiMenu4Fill className="text-white font-bold w-10 h-10" />
					</button>
				</div>

				<div
					style={{ backgroundImage: `url(${sidebarBg})` }}
					className={
						modal
							? "fixed z-50 right-0 top-0 h-full bg-cover bg-no-repeat flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
							: "fixed z-50 right-[-100%] h-full top-0 bg-cover bg-no-repeat flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
					}
				>
					<div className="flex flex-col gap-8">
						<button
							type="button"
							onClick={() => setModal(false)}
							className="styled-border self-end"
						>
							<AiOutlineClose className="text-white text-opacity-80 text-xl font-bold w-8 h-8" />
						</button>
						<ul className="flex flex-col gap-8 text-lg">
							{navLinks
								.slice(1, navLinks.length)
								.map((navLink: INavProps, index: number) => (
									<li key={navLink.name} className="w-full min-h-[2.5rem]">
										<a
											href={navLink.path}
											onClick={() => setModal(false)}
											className="text-white italic text-opacity-80 font-bold text-2xl"
										>
											{(index + 1).toString().padStart(2, "0")}. {navLink.name}
										</a>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
