import { v4 as randomId } from "uuid";
import { useReducer } from "react";
import {
	ADD_TODO,
	CHANGE_CURRENT_VALUE,
	CHANGE_FILTER,
	CHANGE_STATUS,
	CLEAR_COMPLETED,
} from "./actions";
import { ITodo, ITodos } from "../types";
import { getTodoFilter } from "../utils/fillters";

export const initStore: ITodos = {
	curValue: "",
	todos: [],
	filter: "ALL",
};

export const reducer = (state: any, action: any): ITodos => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				todos: [
					...state.todos,
					{ text: state.curValue, isDone: false, id: randomId() },
				],
				curValue: "",
			};
		}
		case CHANGE_CURRENT_VALUE: {
			return {
				...state,
				curValue: action.payload,
			};
		}
		case CHANGE_STATUS: {
			return {
				...state,
				todos: state.todos.map((todo: ITodo) => {
					return todo.id === action.payload
						? { ...todo, isDone: !todo.isDone }
						: todo;
				}),
			};
		}
		case CHANGE_FILTER: {
			return {
				...state,
				filter: action.payload,
			};
		}
		case CLEAR_COMPLETED: {
			return {
				...state,
				todos: [...state.todos.filter(getTodoFilter("ACTIVE"))],
			};
		}
		default: {
			return state;
		}
	}
};

export const useStore = () => {
	return useReducer(reducer, initStore);
};
