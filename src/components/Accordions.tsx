import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IProps, IShedule, tabArray, scheduleList } from "../page/Climb";

interface ITabProps {
	currentTab: number;
	// eslint-disable-next-line @typescript-eslint/ban-types
	changeTab: Function;
}

const Accordions = ({ currentTab, changeTab }: ITabProps) => {
	return (
		<div className="md:hidden flex flex-col items-stretch justify-start gap-4 w-full min-h-[3rem]">
			{tabArray.map(({ name, image }: IProps, index: number) => (
				<div key={name} className="flex flex-col w-full">
					<button
						type="button"
						onClick={() => changeTab(index)}
						className="flex flex-row items-center justify-start gap-3 bg-[transparent] text-[1.5rem] font-semibold text-cyan p-2"
					>
						<span>{name}</span>
						{currentTab === index ? (
							<FaChevronDown className="align-middle" />
						) : (
							<FaChevronUp className="align-middle" />
						)}
					</button>

					{currentTab === index && (
						<div className="flex items-stretch justify-start min-h-[50vh] md:min-h-[100vh] max-w-[100rem] w-full">
							<div
								style={{
									backgroundImage: `url(${image})`,
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
										<span className="text-[1.5rem] font-semibold">
											SCHEDULE
										</span>
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
					)}
				</div>
			))}
		</div>
	);
};

export default Accordions;
