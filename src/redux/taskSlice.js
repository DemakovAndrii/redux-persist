import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
	},
	reducers: {
		addItem: (state, action) => {
			const task = {
				id: action.payload.id,
				task: action.payload.task,
				completed: action.payload.completed,
			};
			state.push(task);
			// localStorage.setItem("state", JSON.stringify(state));
		},
		checkedItem: (state, action) => {
			const index = state.findIndex((task) => task.id === action.payload.id);
			state[index].completed = !state[index].completed;
		},
		deleteItem: (state, action) => {
			// state = state.filter((task) => task.id !== action.payload.id);
		},
	},
});

export const { addItem, checkedItem, deleteItem } = taskSlice.actions;

export default taskSlice.reducer;
