import styled from "styled-components";

const TaskCardContainer = styled.div`
	color: black;
	font-size: 15px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border: 1px solid #e0e0e0;
	margin-top: 6px;
	margin-bottom: 6px;
	border-radius: 8px;
	background-color: white;
	width: 768px;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
	padding: 5px 10px;
	margin-left: 5px;
	font-size: 13px;
	padding-top: 6px;
	border: 1px #e0e0e0 solid;
	border-radius: 6px;
	cursor: pointer;
	color: gray;
	background-color: white;
	color: black;
	transition: background-color 0.3s;
`;

const TaskCard = ({ task, onToggleIsDone, onDelete }) => (
	<TaskCardContainer>
		<div>
			<strong>{task.title}</strong> {task.description}
		</div>
		<div>
			<Button onClick={onToggleIsDone}>{task.isDone ? "⛔️ 취소하기" : "✅ 완료하기"}</Button>
			<Button danger onClick={onDelete}>
				🗑️ 삭제
			</Button>
		</div>
	</TaskCardContainer>
);

export default TaskCard;
