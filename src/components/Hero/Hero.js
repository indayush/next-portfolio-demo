import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				Experienced Automation Engineer.
				<br />
				Fascinated with DevOps & AWS certified Solution Architect.
				<br />
				Currently tinkering with React & Python to build quality products
				and solutions.
			</SectionText>
			<Button onClick={() => (window.location = "https://google.com")}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
