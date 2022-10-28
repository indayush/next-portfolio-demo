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
				Certified AWS Solution Architect Professional.
				<br />
				Fascinated with DevOps & Currently tinkering with different technologies to produce quality products
				and solutions.
			</SectionText>
			<Button onClick={() => (window.location = "https://github.com/indayush")}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
