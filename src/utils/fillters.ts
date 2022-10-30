import { ITodo, TFilters } from "../types";

export const getTodoFilter = (filter: TFilters) => {
	if (filter === "ALL") return () => true;
	if (filter === "COMPLETED") return (todo: ITodo) => todo.isDone;
	if (filter === "ACTIVE") return (todo: ITodo) => !todo.isDone;
	return () => true;
};
