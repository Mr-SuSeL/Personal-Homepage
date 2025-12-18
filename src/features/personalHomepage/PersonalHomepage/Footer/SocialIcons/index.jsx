import { socials } from "./socials";
import { Item, Link, List, styleIcon } from "./styled";

export const SocialIcons = () => (
  <List>
    {socials.map(({ name, url, icon: IconComponent }) => {
      // Tworzymy stylizowany komponent na podstawie zaimportowanej ikony
      const StyledIcon = styleIcon(IconComponent);

      return (
        <Item key={name}>
          <Link href={url} title={name} target="_blank" rel="noreferrer">
            <StyledIcon />
          </Link>
        </Item>
      );
    })}
  </List>
);