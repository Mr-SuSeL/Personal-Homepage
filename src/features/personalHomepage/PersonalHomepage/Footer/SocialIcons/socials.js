import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/Instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com",
    Icon: styleIcon(GitHubIcon)
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    Icon: styleIcon(LinkedInIcon)   
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    Icon: styleIcon(FacebookIcon)   
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: styleIcon(InstagramIcon)
  }
];