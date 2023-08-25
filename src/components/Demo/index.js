import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
import { toast } from "sonner";

const Container = styled.div`
	padding: 20px;
	width: 768px;
`;

const Heading = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
	margin-top: 40px;
	color: black;
`;

const Demo = () => {
	const [tasks, setTasks] = useState([
		{
			id: "0000",
			title: "리액트 공부하기",
			description: "리액트 기초를 공부해봅시다.",
			isDone: false,
		},
		{
			id: "1111",
			title: "리액트 공부하기",
			description: "리액트 기초를 공부해봅시다.",
			isDone: true,
		},
	]);

	const [newTaskTitle, setNewTaskTitle] = useState("");
	const [newTaskDescription, setNewTaskDescription] = useState("");

	const toggleIsDone = (id) => {
		const newTasks = tasks.map((task) => {
			if (task.id !== id) return task;
			return { ...task, isDone: !task.isDone };
		});
		setTasks(newTasks);
	};

	const addNewTask = () => {
		if (!newTaskTitle.trim().length) {
			return toast.error("투두 리스트에 등록하려면 제목이 필요합니다! 🥲");
		}

		if (!newTaskDescription.trim().length) {
			return toast.error("투두 리스트에 등록하려면 내용이 필요합니다! 🥲");
		}

		const newTask = {
			id: uuidv4(),
			title: newTaskTitle,
			description: newTaskDescription,
			isDone: false,
		};

		setTasks([...tasks, newTask]);
		setNewTaskTitle("");
		setNewTaskDescription("");
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};
	
	return (
		<Container>
			<TaskInput
				newTaskTitle={newTaskTitle}
				setNewTaskTitle={setNewTaskTitle}
				newTaskDescription={newTaskDescription}
				setNewTaskDescription={setNewTaskDescription}
				addNewTask={addNewTask}
			/>
			<Heading>Working 🔥</Heading>
			{tasks
				.filter((task) => !task.isDone)
				.map((task) => (
					<TaskCard
						key={task.id}
						task={task}
						onToggleIsDone={() => toggleIsDone(task.id)}
						onDelete={() => deleteTask(task.id)}
					/>
				))}
			<Heading>Done..! 🎉</Heading>
			{tasks
				.filter((task) => task.isDone)
				.map((task, idx) => (
					<TaskCard
						key={idx}
						task={task}
						onToggleIsDone={() => toggleIsDone(task.id)}
						onDelete={() => deleteTask(task.id)}
					/>
				))}
		</Container>
	);
};

export default Demo;
