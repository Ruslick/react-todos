import React from "react";
import { ITodo, ITodos, TFilters } from "../../types";
import { Button } from "../ui/button/button";

import styles from "./manage-panel.module.scss";

interface IProps {
  store: ITodos
  changeFilter: (filter: TFilters) => void,
  clearCompleted: VoidFunction
}

export const ManagePanel: React.FC<IProps> = ({ store, changeFilter, clearCompleted }) => {
	const clickClearCompletedHandle = () => {
		clearCompleted();
	};

	return (
		<div className={styles.panel}>
			{store.todos.filter((todo: ITodo) => !todo.isDone).length} items left
			<section className={styles.filterButtons}>
				<Button
					active={store.filter === "ALL"}
					onClick={() => {
						changeFilter("ALL");
					}}
				>
					All
				</Button>
				<Button
					active={store.filter === "ACTIVE"}
					onClick={() => {
						changeFilter("ACTIVE");
					}}
				>
					Active
				</Button>
				<Button
					active={store.filter === "COMPLETED"}
					onClick={() => {
						changeFilter("COMPLETED");
					}}
				>
					Completed
				</Button>
			</section>
			<section className={styles.clearButton}>
				<Button onClick={clickClearCompletedHandle}>Clear completed</Button>
			</section>
		</div>
	);
};
