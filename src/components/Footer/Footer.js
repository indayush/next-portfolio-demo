import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";
import { SocialHandles } from "../../constants/constants";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:8853200111">+91 8853 200 111</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>E Mail</LinkTitle>
					<LinkItem href="mailto:ayushadarsh03@gmail.com">
						ayushadarsh03@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Sharpen your curiousity</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href={SocialHandles[0].link} target="_blank">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href={SocialHandles[1].link} target="_blank">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href={SocialHandles[2].link} target="_blank">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
