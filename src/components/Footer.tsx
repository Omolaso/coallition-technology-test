import logo from "/logo2.png";

const footerStyles = {
	backgroundImage: `url(${logo})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "4rem",
	maxWidth: "15rem",
	width: "100%",
};

const Footer = () => {
	return (
		<footer className="flex items-center justify-center min-h-[7rem] bg-cyan text-slate py-2 px-4 md:px-8">
			<div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[100rem] w-full mx-auto">
				<div style={footerStyles} />
				<span className="italic">COPYRIGHT 2016. ALL RIGHTS RESERVED</span>
			</div>
		</footer>
	);
};

export default Footer;
