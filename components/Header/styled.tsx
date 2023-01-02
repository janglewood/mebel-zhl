import Link from "next/link";
import styled from "styled-components";
import { Text } from "@/components/Text";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin: 0 auto;
`;

export const LogoWrapper = styled(Link)``;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const NavText = styled(Text)`
  font-weight: initial;
  color: ${({ theme }) => theme.palette.fonts.navLink};
`;

export const ActiveNavText = styled(NavText)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.fonts.navLinkActive};
  position: relative;

  &::after {
    content: "";
    bottom: -14px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.palette.fonts.navLinkActive};
    border-radius: 0 0 4px 4px;
  }
`;
