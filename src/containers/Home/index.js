import React, { useEffect } from "react";
import Hero from "../../components/Hero/index.js";
import { Background, Container } from "./styles";
import Demo from "../../components/Demo/index.js";
import { toast } from "sonner";

const Home = () => {
	useEffect(() => {
		toast.success("투두 리스트에 방문한 것을 환영합니다.");
	}, []);
	return (
		<main>
			<Background />
			<Container>
				<Hero />
				<Demo />
			</Container>
		</main>
	);
};

export default Home;
