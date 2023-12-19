import Navbar from "../components/Navbar";
import heroSectionbg from "/hero-section-image.jpg";

const containerStyle = {
	backgroundImage: `url(${heroSectionbg})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
};

const LandingPage = () => {
	return (
		<div
			style={containerStyle}
			className="font-roboto text-red-600 w-full py-2 px-4"
		>
			<Navbar />
			<h1>LandingPage</h1>
		</div>
	);
};

export default LandingPage;
