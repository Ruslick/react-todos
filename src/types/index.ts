export interface ITodo {
  text: string;
  isDone: boolean;
  id: string;
}


export type TFilters = "ALL" | "COMPLETED" | "ACTIVE"


export interface ITodos {
  curValue: string;
  todos: ITodo[],
  filter: TFilters
}