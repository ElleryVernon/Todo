import React from "react";
import MainHeader from "../Header";
import { HeroContainer, HeroDescription, HeroTitle } from "./styles";

const Hero = () => {
	return (
		<HeroContainer>
			<MainHeader />
			<HeroTitle>
				나만의 <span>TODO LIST</span>
			</HeroTitle>
			<HeroDescription>
				오늘의 목표를 달성하기 위해 해야할 일을 명확하게 작성해보세요!
			</HeroDescription>
		</HeroContainer>
	);
};

export default Hero;
