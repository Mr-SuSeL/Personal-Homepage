import { socials } from "./socials";
import { Item, Link, List, styleIcon } from "./styled";

const IconImg = styleIcon("img");

export const SocialIcons = () => (
  <List>
    {socials.map(({ name, url, icon }) => (
      <Item key={name}>
        <Link href={url} title={name} target="_blank" rel="noreferrer">
          <IconImg src={icon} alt={name} />
        </Link>
      </Item>
    ))}
  </List>
);
