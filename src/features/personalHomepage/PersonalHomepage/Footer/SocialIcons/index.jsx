import { socials } from "./socials";
import { Item, Link, List, IconWrapper } from "./styled";

export const SocialIcons = () => (
    <List>
        {socials.map(({ name, url, icon: Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                </Link>
            </Item>
        ))}
    </List>
);