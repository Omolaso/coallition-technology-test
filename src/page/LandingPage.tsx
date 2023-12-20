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

const LandingPage = () => {
	return (
		<>
			<section style={containerBgStyle} className="w-full font-roboto">
				<Navbar />
				<div className="flex-1 flex item-start justify-center max-w-[100rem] mx-auto text-red-600 w-full px-4 md:px-8 min-h-[50vh]">
					<div className="flex flex-col items-center justify-center text-center">
						<span className="font-bold text-[3rem] md:text-[5rem] text-slate">
							LOSANGELES
						</span>
						<span className="font-bold text-[3rem] md:text-[5rem] text-cyan lg:mt-[-2rem]">
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

			<History />
			<Climb />
			<Footer />
		</>
	);
};

export default LandingPage;
