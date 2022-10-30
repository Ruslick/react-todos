import React, { SyntheticEvent } from "react";
import { Typography } from "../typography/typography";

import styles from "./button.module.scss";

interface IProps {
	children: string;
	onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
	active?: boolean;
}

export const Button: React.FC<IProps> = ({
	children,
	onClick,
	active = false,
}) => {
	const className = styles[active ? "active" : "notActive"];

	return (
		<button className={className} onClick={onClick}>
			<Typography variant="mini" color="secondary">
				{children}
			</Typography>
		</button>
	);
};
