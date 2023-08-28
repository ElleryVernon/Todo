import React, { useState } from "react";
import styled from "styled-components";
import { createId } from "@paralleldrive/cuid2";
import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
import { toast } from "sonner";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

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
			id: "clluefel0000008lcaf5mgrn6",
			title: "리액트 공부하기",
			description: "리액트 기초를 공부해봅시다.",
			isDone: false,
		},
		{
			id: "cllueflvw000208lce4mr7929",
			title: "리액트 공부하기",
			description: "리액트 기초를 공부해봅시다.",
			isDone: true,
		},
	]);
	const [newTaskTitle, setNewTaskTitle] = useState("");
	const [newTaskDescription, setNewTaskDescription] = useState("");
	const [showConfetti, setShowConfetti] = useState(false);

	const { width, height } = useWindowSize();

	const handleConfetti = (title) => {
		toast.success(`🎉 ${title} 완료!`);
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 4250);
	};

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
			id: createId(),
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
		<React.Fragment>
			{showConfetti && (
				<Confetti
					width={width}
					height={height - 64}
					numberOfPieces={300}
					wind={0.01}
					gravity={0.15}
				/>
			)}
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
							handleConfetti={handleConfetti}
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
							handleConfetti={handleConfetti}
						/>
					))}
			</Container>
		</React.Fragment>
	);
};

export default Demo;
