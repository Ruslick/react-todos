import React, {
	FormEvent,
	KeyboardEvent,
} from "react";
import {
	addTodoActionCreator,
	changeFilterActionCreator,
	changeStatusActionCreator,
	changeValueActionCreator,
	clearCompletedActionCreator,
} from "../../services/actions";
import { useStore } from "../../services/reducers";
import { ITodo, TFilters } from "../../types";
import { getTodoFilter } from "../../utils/fillters";
import { ManagePanel } from "../manage-panel/manage-panel";
import { Todo } from "../todo/todo";
import { Input } from "../ui/input/input";
import styles from "./workspace.module.scss";

export const Workspace = () => {
	const [store, dispatch] = useStore();

	const changeHandle = (e: FormEvent<HTMLInputElement>) => {
		dispatch(changeValueActionCreator(e.currentTarget.value));
	};

	const keySubmitHandle = (e: KeyboardEvent) => {
		if (e.key === "Enter") dispatch(addTodoActionCreator());
	};

	const changeFilter = (filter: TFilters) => {
		dispatch(changeFilterActionCreator(filter));
	};

	const clearCompleted = () => {
		dispatch(clearCompletedActionCreator());
	};

	return (
		<div className={styles.wrapper}>
			<Input
				onKeyDown={keySubmitHandle}
				onChange={changeHandle}
				value={store.curValue}
			/>
			{store.todos.filter(getTodoFilter(store.filter)).map((todo: ITodo) => {
				const changeStatusHandle = () => {
					dispatch(changeStatusActionCreator(todo.id));
				};
				return (
					<Todo key={todo.id} todo={todo} changeStatus={changeStatusHandle} />
				);
			})}
			<ManagePanel
				store={store}
				changeFilter={changeFilter}
				clearCompleted={clearCompleted}
			/>
		</div>
	);
};
