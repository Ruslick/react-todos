import React from "react";
import { ITodo } from "../../types";
import { ActiveIcon } from "../icons/active-icon";
import { CompletedIcon } from "../icons/completed-icon";
import { Typography } from "../ui/typography/typography";
import styles from "./todo.module.scss";

export const Todo: React.FC<{ todo: ITodo; changeStatus: VoidFunction }> = ({
	todo,
	changeStatus,
}) => {
	return (
		<div className={styles.todo} onClick={changeStatus}>
			<Typography color={todo.isDone ? "inactive" : "primary"}>
				{todo.isDone ? <CompletedIcon /> : <ActiveIcon />}
			</Typography>
			<Typography color={todo.isDone ? "inactive" : "primary"}>
				{todo.text}
			</Typography>
		</div>
	);
};
