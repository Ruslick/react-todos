import { TFilters } from "../types"

export const ADD_TODO: "ADD_TODO" = "ADD_TODO"
export const CHANGE_CURRENT_VALUE: "CHANGE_CURRENT_VALUE" = "CHANGE_CURRENT_VALUE"
export const CHANGE_STATUS: "CHANGE_STATUS" = "CHANGE_STATUS"
export const CHANGE_FILTER: "CHANGE_FILTER" = "CHANGE_FILTER"
export const CLEAR_COMPLETED: "CLEAR_COMPLETED" = "CLEAR_COMPLETED"



export const addTodoActionCreator = () => {
	return { type: ADD_TODO };
};

export const changeStatusActionCreator = (id: string) => {
	return { type: CHANGE_STATUS, payload: id };
};

export const changeValueActionCreator = (payload: string) => {
	return { type: CHANGE_CURRENT_VALUE, payload };
};

export const changeFilterActionCreator = (payload: TFilters) => {
	return { type: CHANGE_FILTER, payload };
};
export const clearCompletedActionCreator = () => {
	return { type: CLEAR_COMPLETED };
};