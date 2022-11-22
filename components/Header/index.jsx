import Logo from "@/assets/icons/logo.svg";
import {
  ActiveNavText,
  HeaderWrapper,
  LogoWrapper,
  NavLink,
  NavText,
  NavWrapper,
} from "./styled";
import { useRouter } from "next/router";
import { navigationConfig } from "./navigationConfig";

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <HeaderWrapper>
      <LogoWrapper href="/">
        <Logo />
      </LogoWrapper>
      <NavWrapper>
        {navigationConfig.map(({ title, href }) => {
          return (
            <NavLink href={href} key={title}>
              {pathname === href ? (
                <ActiveNavText type="nav-link" isActive={pathname === href}>
                  {title}
                </ActiveNavText>
              ) : (
                <NavText type="nav-link" isActive={pathname === href}>
                  {title}
                </NavText>
              )}
            </NavLink>
          );
        })}
      </NavWrapper>
    </HeaderWrapper>
  );
};
