import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { selectTaskById } from "../../features/tasks/taskSlice"; // 선택한 Task를 가져오는 셀렉터

const TaskDetail = () => {
	const { taskId } = useParams();
	const task = useSelector((state) => selectTaskById(state, taskId));

	return (
		<div style={{ margin: "32px" }}>
			<Link to="/">이전으로</Link>
			<p>id: {task.id}</p>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
		</div>
	);
};

export default TaskDetail;
