import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper, WarningIcon } from "./styled";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load GitHub&nbsp;projects.<br />
      You can check them directly on&nbsp;GitHub.
    </Paragraph>
    <ButtonLink
      href={`https://github.com/${githubUsername}`}
      target="_blank"
    >
      Go to GitHub
    </ButtonLink>
  </Wrapper>
);
