import { useState } from "react";
import heroSectionbg from "/hero-section-image.jpg";
import sliderImage1 from "/slider-image1.jpg";
import sliderImage2 from "/slider-image2.jpg";
import logo from "/logo2.png";
import { GoDotFill } from "react-icons/go";
import { navLinks, INavProps } from "../components/NavLinks";

const containerStyle = {
	backgroundImage: `url(${heroSectionbg})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
};

const slidesArray: string[] = [
	`${sliderImage1}`,
	`${sliderImage2}`,
	`${sliderImage1}`,
	`${sliderImage2}`,
	`${sliderImage1}`,
	`${sliderImage2}`,
	`${sliderImage1}`,
	`${sliderImage2}`,
	`${sliderImage1}`,
	`${sliderImage2}`,
	`${sliderImage1}`,
	`${sliderImage2}`,
];

const History = () => {
	const [currentSlide, setCurrentSlide] = useState({
		currentIndex: 0,
		lastIndex: 4,
	});

	const goToNextSlide = () => {
		setCurrentSlide((prevState) => ({
			currentIndex: prevState.currentIndex + 4,
			lastIndex: prevState.lastIndex + 4,
		}));
	};

	return (
		<section id="history" className="w-full">
			<nav className="hidden lg:flex min-h-[5rem] bg-white text-slate w-full py-2 px-4 md:px-8">
				<div className="hidden md:flex flex-row items-center justify-between w-full max-w-[100rem]">
					<div className="flex items-center justify-center w-full">
						<a href={navLinks[0].path} className="w-full">
							<img
								src={logo}
								alt="Logo"
								className="w-full min-h-[4rem] max-w-[15rem] rounded-full"
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
											className="font-semibold text-base italic underline hover:no-underline"
										>
											{(index + 1).toString().padStart(2, "0")}. {navLink.name}
										</a>
									</li>
								))}
						</ul>
					</div>
				</div>
			</nav>

			<div
				style={containerStyle}
				className="flex flex-col items-center justify-between min-h-[70vh] w-full"
			>
				<div className="max-w-[100rem] w-full mx-auto">
					<div className="flex flex-col gap-4 w-full py-2 px-4 md:px-8">
						<div className="flex flex-row items-end gap-[0.15rem] md:gap-1">
							<span className="font-bold text-[7rem] mb-[-2.3rem]">01</span>
							<div className="flex flex-col">
								<span className="text-[2rem] font-semibold">HISTORY</span>
								<div className="w-[15px] h-[15px] bg-black" />
							</div>
						</div>

						<div className="ml-0 md:ml-[5rem]">
							<span>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus non repellat rem vitae adipisci, fugit ullam, provident
								eius voluptas quia maiores laboriosam ut dicta magni. Vel optio
								veniam est necessitatibus?
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-stretch justify-center bg-black bg-opacity-75 py-2 px-4 md:px-8 min-h-[10rem] w-full max-w-[100rem] mx-auto">
					<div className="flex flex-col items-center gap-2 w-full text-white">
						<div className="flex-1 flex flex-row items-center gap-4 w-full">
							{slidesArray
								.slice(currentSlide.currentIndex, currentSlide.lastIndex)
								.map((slide: string, index: number) => (
									<div
										key={index}
										style={{
											backgroundImage: `url(${slide})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											height: "100%",
											width: "100%",
										}}
									/>
								))}
						</div>
						<div className="flex flex-row items-center gap-2">
							{slidesArray.slice(0, 3).map((slide: string, index: number) => (
								<button
									type="button"
									key={index}
									onClick={() => goToNextSlide()}
								>
									<GoDotFill />
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
