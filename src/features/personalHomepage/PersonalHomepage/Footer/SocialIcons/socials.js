import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/Instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Mr-SuSeL/",
    Icon: styleIcon(GitHubIcon)
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/%C5%82ukasz-sus%C5%82owicz-9b7093b3/",
    Icon: styleIcon(LinkedInIcon)   
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/suslowiczenduro", //do usunięcia
    Icon: styleIcon(FacebookIcon)   
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: styleIcon(InstagramIcon)
  }
];