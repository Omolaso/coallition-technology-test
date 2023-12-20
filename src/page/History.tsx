import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderImage1 from "/slider-image1.jpg";
import sliderImage2 from "/slider-image2.jpg";
import logo2 from "/logo2.png";
import logo from "/logo.jpg";
import { navLinks, INavProps } from "../components/NavLinks";

const containerStyle = {
	backgroundImage: `url(${logo})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
};

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
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
	return (
		<section id="history" className="w-full">
			<nav className="hidden lg:flex min-h-[5rem] bg-white text-slate w-full py-2 px-4 md:px-8">
				<div className="hidden md:flex flex-row items-center justify-between w-full max-w-[100rem]">
					<div className="flex items-center justify-center w-full">
						<a href={navLinks[0].path} className="w-full">
							<img
								src={logo2}
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
							<span className="font-bold text-[7rem] mb-[-2.3rem] text-slate">
								01
							</span>
							<div className="flex flex-col">
								<span className="text-[2rem] font-semibold text-cyan">
									HISTORY
								</span>
								<div className="w-[15px] h-[15px] bg-cyan" />
							</div>
						</div>

						<div className="ml-0 md:ml-[5rem]">
							<span className="font-medium text-cyan">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Ducimus non repellat rem vitae adipisci, fugit ullam, provident
								eius voluptas quia maiores laboriosam ut dicta magni. Vel optio
								veniam est necessitatibus?
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-stretch justify-center bg-black bg-opacity-75 py-2 px-4 md:px-8 min-h-[10rem] w-full max-w-[100rem] mx-auto">
					<Carousel
						responsive={responsive}
						removeArrowOnDeviceType={["mobile"]}
						additionalTransfrom={0}
						arrows={false}
						autoPlay
						autoPlaySpeed={3000}
						containerClass="container-with-dots"
						dotListClass=""
						draggable={true}
						focusOnSelect={false}
						infinite={true}
						minimumTouchDrag={80}
						pauseOnHover
						className="w-full"
					>
						{slidesArray.map((slide: string, index: number) => (
							<div
								key={index}
								style={{
									backgroundImage: `url(${slide})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									minHeight: "10rem",
									maxWidth: "25rem",
									width: "100%",
								}}
							/>
						))}
					</Carousel>
				</div>
			</div>
		</section>
	);
};

export default History;
