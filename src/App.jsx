import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./redux/taskSlice";
import TodoItem from "./components/TodoItem";

export default function App() {
	const allTasks = useSelector((state) => state.task);

	const dispatch = useDispatch();

	const [text, setText] = useState("");
	const date = Date.now();

	const save = (e) => {
		e.preventDefault();
		const newId = allTasks.length + 1;
		dispatch(addItem({ id: newId, task: text, completed: false }));
	};

	return (
		<div>
			<form action="submit" onSubmit={save}>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button>save</button>
			</form>

			{allTasks.map((todo, index) => {
				return (
					<div key={index}>
						<TodoItem
							id={todo.id}
							task={todo.task}
							completed={todo.completed}
						/>
					</div>
				);
			})}
		</div>
	);
}
