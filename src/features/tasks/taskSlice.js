import { createSlice } from "@reduxjs/toolkit";
import { createId } from "@paralleldrive/cuid2";

const initialState = [
	{
		id: "cllrjmtp2000008mf6bnl4cja",
		title: "리액트 공부하기",
		description: "리액트 기초를 공부해봅시다.",
		isDone: false,
	},
	{
		id: "cllrjn0n7000108mf85mu6wa3",
		title: "리액트 공부하기",
		description: "리액트 기초를 공부해봅시다.",
		isDone: true,
	},
];

export const selectTasks = (state) => state.tasks;

export const selectTaskById = (state, taskId) => {
	const tasks = selectTasks(state);
	return tasks.find((task) => task.id === taskId);
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		toggleIsDone: (state, action) => {
			const task = state.find((task) => task.id === action.payload);
			if (task) {
				task.isDone = !task.isDone;
			}
		},
		addNewTask: (state, action) => {
			state.push({
				id: createId(),
				title: action.payload.title,
				description: action.payload.description,
				isDone: false,
			});
		},
		deleteTask: (state, action) => {
			const index = state.findIndex((task) => task.id === action.payload);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const { toggleIsDone, addNewTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
