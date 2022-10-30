import React, { useState } from "react";
import { addTodoActionCreator, changeFilterActionCreator, changeStatusActionCreator, changeValueActionCreator, clearCompletedActionCreator } from "./actions";
import { reducer } from "./reducers";

describe("test", () => {
	const initStore = {
		curValue: "",
		todos: [
			{
				text: "testText",
				isDone: false,
				id: "testId",
			},
      {
				text: "testText2",
				isDone: true,
				id: "testId2",
			}
		],
		filter: "ALL",
	};

	test("addTodo", () => {
		expect(initStore.todos.length).toBe(2);

		const newStore1 = reducer(initStore, addTodoActionCreator());
		expect(newStore1.todos.length).toBe(3);

		const newStore2 = reducer(newStore1, addTodoActionCreator());
		expect(newStore2.todos.length).toBe(4);
	});
	test("changeStatus", () => {
    const newStore1 = reducer(initStore, changeStatusActionCreator("testId"));
		const newStore2 = reducer(newStore1, changeStatusActionCreator("testId"));

		const expectedStore1 = {
			curValue: "",
			todos: [
				{
					text: "testText",
					isDone: true,
					id: "testId",
				},
        {
          text: "testText2",
          isDone: true,
          id: "testId2",
        }
			],
			filter: "ALL",
		};

		const expectedStore2 = {
			curValue: "",
			todos: [
				{
					text: "testText",
					isDone: false,
					id: "testId",
				},
        {
          text: "testText2",
          isDone: true,
          id: "testId2",
        }
			],
			filter: "ALL",
		};

		expect(newStore1).toEqual(expectedStore1);
		expect(newStore2).toEqual(expectedStore2);
	});

  test("changeValue", () => {
		expect(initStore.curValue).toEqual("");

    const newStore1 = reducer(initStore, changeValueActionCreator("testValue1"));
		expect(newStore1.curValue).toEqual("testValue1");

		const newStore2 = reducer(newStore1, changeValueActionCreator("testValue2"));
		expect(newStore2.curValue).toEqual("testValue2");

	});

  test("changeFilter", () => {
		expect(initStore.filter).toEqual("ALL");

    const newStore1 = reducer(initStore, changeFilterActionCreator("ACTIVE"));
		expect(newStore1.filter).toEqual("ACTIVE");

		const newStore2 = reducer(newStore1, changeFilterActionCreator("COMPLETED"));
		expect(newStore2.filter).toEqual("COMPLETED");
	});

  test("clearCompleted", () => {

		const expectedStore1 = {
			curValue: "",
			todos: [
				{
					text: "testText",
					isDone: false,
					id: "testId",
				},
			],
			filter: "ALL",
		};

		expect(reducer(initStore, clearCompletedActionCreator())).toEqual(expectedStore1);
	});
});
