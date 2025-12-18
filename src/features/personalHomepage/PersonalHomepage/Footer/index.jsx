import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.&nbsp;
                If I have time available, I’d be happy to join your project and help bring it to life with full commitment and attention to detail.
            </Paragraph> 
            <SocialIcons />
        </Address>
    </Wrapper>
);