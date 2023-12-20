import logo from "/logo.jpg";

export interface INavProps {
	name: string;
	path: string;
}

export const navLinks: INavProps[] = [
	{
		name: `${logo}`,
		path: "/",
	},
	{
		name: "History",
		path: "/#history",
	},
	{
		name: "Team",
		path: "/#climb",
	},
];
