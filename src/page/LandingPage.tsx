import heroSectionbg from "/hero-section-image.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import History from "./History";
import Climb from "./Climb";

const containerStyle = {
	backgroundImage: `url(${heroSectionbg})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
};

const LandingPage = () => {
	return (
		<>
			<section style={containerStyle} className="w-full">
				<div className="flex flex-col item-center h-full max-w-[100rem] mx-auto font-roboto text-red-600 w-full px-4 md:px-8">
					<Navbar />
					{/* <div className="flex flex-col items-center font-bold text-[6rem]"> */}
					<h1 className="">LOSANGELES</h1>
					<h1 className="">MOUNTAINS</h1>
					{/* </div> */}
				</div>
			</section>
			<History />
			<Climb />
			<Footer />
		</>
	);
};

export default LandingPage;
