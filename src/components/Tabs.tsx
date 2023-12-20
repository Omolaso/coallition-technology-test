/* eslint-disable @typescript-eslint/ban-types */
import { IProps, IShedule, tabArray, scheduleList } from "../page/Climb";

interface ITabProps {
	currentTab: number;
	changeTab: Function;
}
const Tabs = ({ currentTab, changeTab }: ITabProps) => {
	return (
		<div className="hidden md:flex flex-col bg-cyan w-full">
			<div className="flex flex-row items-stretch justify-start gap-4 max-w-[100rem] w-full min-h-[3rem] px-4 md:px-8">
				{tabArray.map(({ name }: IProps, index: number) => (
					<button
						type="button"
						key={name}
						onClick={() => changeTab(index)}
						className={
							currentTab === index
								? "bg-gray text-[1.5rem] font-semibold text-bgBlue underline px-2 min-h-full"
								: "bg-[transparent] text-[1.5rem] font-semibold text-gray min-h-full"
						}
					>
						{name}
					</button>
				))}
			</div>
			<div className="flex items-stretch justify-start min-h-[70vh] md:min-h-[100vh] max-w-[100rem] w-full">
				<div
					style={{
						backgroundImage: `url(${tabArray[currentTab].image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						minHeight: "100%",
						width: "100%",
					}}
					className="flex items-start justify-start p-4 md:p-8"
				>
					{currentTab === 0 && (
						<div className="flex flex-col items-center md:items-start gap-4 p-4 bg-white bg-opacity-75 min-h-[15rem] text-bgBlue w-full max-w-[25rem] ml-0 md:ml-[2rem]">
							<span className="text-[1.5rem] font-semibold">SCHEDULE</span>
							<ul className="flex flex-col items-start justify-start w-full gap-3">
								{scheduleList.map((list: IShedule) => (
									<li
										key={list.date}
										className="flex flex-row items-center justify-between w-full gap-2"
									>
										<span>{list.date}</span>
										<span>{list.value}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
