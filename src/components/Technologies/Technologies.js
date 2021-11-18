import React from "react";
import {
	DiCode,
	DiDjango,
	DiGit,
	DiJira,
	DiMongodb,
	DiMysql,
	DiNodejs,
	DiPython,
	DiReact,
	DiVisualstudio,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";
import EC2 from "react-aws-icons/dist/aws/logo/EC2";
import Route53 from "react-aws-icons/dist/aws/logo/Route53";
import Lambda from "react-aws-icons/dist/aws/logo/Lambda";
import RDS from "react-aws-icons/dist/aws/logo/RDS";
import S3 from "react-aws-icons/dist/aws/logo/S3";
import ELB from "react-aws-icons/dist/aws/logo/ELB";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<br />

		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked on numerous Technologies in the Automation & Development
			domains
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="5rem" />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiNodejs size="5rem" />
				<ListContainer>
					<ListTitle>Back End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node, Mongo & Express
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaAws size="5rem" />
				<ListContainer>
					<ListTitle>Cloud Technologies</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						<EC2 size="3rem" />
						<RDS size="3rem" />
						<ELB size="3rem" />
						<S3 size="3rem" />
						<Route53 size="3rem" />
						<Lambda size="3rem" />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiCode size="5rem" />
				<ListContainer>
					<ListTitle>Other</ListTitle>
					<ListParagraph>
						Skirmishes with
						<br />
						<DiDjango size="3rem" /> &nbsp;
						<DiPython size="3rem" /> &nbsp;
						<DiGit size="3rem" /> &nbsp;
						<DiJira size="3rem" /> &nbsp;
						<DiMongodb size="3rem" /> &nbsp;
						<DiVisualstudio size="3rem" /> &nbsp;
						<DiMysql size="3rem" />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
