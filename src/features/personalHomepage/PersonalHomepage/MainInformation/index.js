import profilePhoto from "./personalPhoto.png";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={profilePhoto} alt="Łukasz Susłowicz" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Łukasz Susłowicz</Name>
            <Summary>Fullstack Developer specializing in ReactJS with Python and DevOps best practises. 
                Passionate about creating efficient and user-friendly web applications e-commerce oriented.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
            Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);