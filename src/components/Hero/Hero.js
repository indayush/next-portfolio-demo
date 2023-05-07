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
				DevOps engineer with expertise in AWS, specializing in cost-effective solutions that optimize performance and efficiency.
				<br />
				AWS Solution Architect Associate certified with a track record of delivering innovative solutions.
			</SectionText>
			<Button onClick={() => (window.location = "https://github.com/indayush")}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
