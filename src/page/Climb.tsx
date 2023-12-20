/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Mountain1 from "/climb-bg.jpg";
import Mountain2 from "/slider-image2.jpg";
import Tabs from "../components/Tabs";
import Accordions from "../components/Accordions";

export interface IProps {
	name: string;
	image: string;
}
export interface IShedule {
	date: string;
	value: string;
}

export const tabArray: IProps[] = [
	{
		name: "Mountain 1",
		image: `${Mountain1}`,
	},
	{
		name: "Mountain 2",
		image: `${Mountain2}`,
	},
];

export const scheduleList: IShedule[] = [
	{
		date: "25 Nov 2016",
		value: "Vestibulum viverra",
	},
	{
		date: "28 Nov 2016",
		value: "Vestibulum viverra",
	},
	{
		date: "18 Dec 2016",
		value: "Vestibulum viverra",
	},
	{
		date: "7 Jan 2017",
		value: "Vestibulum viverra",
	},
];

const Climb = () => {
	const [currentTab, setCurrentTab] = useState<number>(0);

	const changeTab = (index: number) => {
		setCurrentTab(index);
	};

	return (
		<section id="climb" className="w-full">
			<div className="bg-white max-w-[100rem] mx-auto w-full">
				<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[5rem] w-full py-2 px-4 md:px-8">
					<div className="flex flex-row items-center gap-[0.15rem] md:gap-1">
						<span className="font-bold text-[7rem] text-slate">02</span>
						<div className="flex flex-col mb-[-2rem] md:mb-[-1.8rem]">
							<span className="text-[2rem] font-semibold text-cyan">CLIMB</span>
							<div className="w-[15px] h-[15px] bg-cyan" />
						</div>
					</div>
					<span className="font-medium text-cyan">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab cum,
						aut sit libero sed. Amet sit ut laboriosam suscipit, facere quo
						veritatis modi deserunt error quaerat. Officiis, reprehenderit rem!
					</span>
				</div>
			</div>

			<Tabs currentTab={currentTab} changeTab={changeTab} />
			<Accordions currentTab={currentTab} changeTab={changeTab} />
		</section>
	);
};

export default Climb;
