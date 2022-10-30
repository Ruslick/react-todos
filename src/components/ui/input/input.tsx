import React, { FormEvent, KeyboardEvent } from "react";
import { ArrowheadIcon } from "../../icons/arrowhead-icon";
import styles from "./input.module.scss";

interface IProps {
	value: string;
	onChange: (event: FormEvent<HTMLInputElement>) => void;
	onKeyDown: (e: KeyboardEvent) => void;
}

export const Input: React.FC<IProps> = ({ onChange, onKeyDown, value }) => {
	return (
		<div className={styles.wrapper}>
      <ArrowheadIcon />
			<input
        className={styles.input}
				type="text"
				onChange={onChange}
				value={value}
				onKeyDown={onKeyDown}
        placeholder="What need to be done?"
			/>
		</div>
	);
};
