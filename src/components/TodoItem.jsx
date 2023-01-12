import React from "react";
import { useDispatch } from "react-redux";
import { checkedItem, deleteItem } from "../redux/taskSlice";

const Test = ({ id, task, completed }) => {
	const dispatch = useDispatch();

	// const handleChange = (e) => {
	// 	dispatch(checkedItem({ completed: !completed, id: id }));
	// };

	return (
		<div>
			<input
				type="checkbox"
				onChange={() => {
					dispatch(checkedItem({ id }));
				}}
				checked={completed}
			/>
			{id}. {task}
			<button
				onClick={() => {
					dispatch(deleteItem({ id }));
				}}
			>
				del
			</button>
		</div>
	);
};

export default Test;
