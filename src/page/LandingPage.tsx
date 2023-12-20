import { useState, useEffect, useRef } from "react";
import heroSectionbg from "/hero-section-image2.jpg";
import heroSectionImage from "/hero-section-image.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import History from "./History";
import Climb from "./Climb";

const containerBgStyle = {
	backgroundImage: `url(${heroSectionbg})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
};

export interface IIntersectionProp {
	isVisible: boolean;
}

const LandingPage = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const targetElement = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const currentTargetElement = targetElement.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIsVisible(entry.isIntersecting);
			});
		});

		if (currentTargetElement) {
			observer.observe(currentTargetElement);
		}

		return () => {
			if (currentTargetElement) {
				observer.unobserve(currentTargetElement!);
			}
		};
	}, []);

	return (
		<main ref={targetElement} className="w-full">
			<section style={containerBgStyle} className="w-full font-roboto">
				<Navbar isVisible={isVisible} />
				<div className="flex-1 flex item-start justify-center max-w-[100rem] mx-auto text-red-600 w-full px-4 md:px-8 min-h-[50vh] overflow-hidden">
					<div className="flex flex-col items-center justify-center text-center">
						<span
							className={
								isVisible
									? "duration-500 ease-linear font-bold text-[3rem] md:text-[5rem] text-slate"
									: "translate-x-[-100%] duration-500 ease-linear font-bold text-[3rem] md:text-[5rem] text-slate"
							}
						>
							LOSANGELES
						</span>
						<span
							className={
								isVisible
									? "font-bold text-[3rem] md:text-[5rem] text-cyan lg:mt-[-2rem] duration-500 ease-linear"
									: "-translate-x-[-100%] duration-500 ease-linear font-bold text-[3rem] md:text-[5rem] text-slate"
							}
						>
							MOUNTAINS
						</span>
					</div>
				</div>

				<div
					style={{
						backgroundImage: `url(${heroSectionImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						minHeight: "80vh",
						width: "100%",
					}}
					className="absolute bottom-0 mi"
				/>
			</section>

			<History isVisible={isVisible} />
			<Climb isVisible={isVisible} />
			<Footer />
		</main>
	);
};

export default LandingPage;
