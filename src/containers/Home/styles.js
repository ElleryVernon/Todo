import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	z-index: 10;
	min-width: 800px;
	max-width: 1200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	padding-left: 24px;
	padding-right: 24px;
	color: white;
	@media (min-width: 640px) {
		padding-left: 64px;
		padding-right: 64px;
	}
`;

export const Background = styled.div`
	width: 100%;
	min-width: 800px;
	min-height: 100vh;
	position: fixed;
	display: flex;
	justify-content: center;
	padding-left: 24px;
	padding-right: 24px;
	padding-top: 120px;
	padding-bottom: 120px;
	pointer-events: none;
	background-color: white;
	background-image: radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
		radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
		radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
		radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
		radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
		radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
		radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
	filter: blur(100px) saturate(150%);
	opacity: 0.15;
`;
