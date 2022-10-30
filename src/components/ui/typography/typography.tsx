import React, { ReactNode } from "react";
import styles from './typography.module.scss'

interface IProps {
	children: ReactNode;
	variant?: "p" | "h" | "mini";
	color?: "primary" | "secondary" | "inactive";
	italic?: boolean;
	line?: boolean;
}

export const Typography: React.FC<IProps> = (props) => {
	const {
		children,
		variant = "p",
		color = "primary",
		italic = false,
		line = false,
	} = props;

  const className = `${styles[variant]} ${styles[color]} ${italic ? 'italic' : ''} ${line ? 'line' : ''}`

	return <span className={className}>{children}</span>;
};
