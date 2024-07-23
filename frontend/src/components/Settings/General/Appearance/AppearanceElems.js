import styled from "styled-components";
import { lightTheme, darkTheme } from "../../../../utils/Themes";

export const AppearanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThemeButton = styled.button`
  width: 300px;
  height: 150px;
  border-radius: 15px;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  ${({ active, theme }) =>
    active
      ? `border: 3px solid ${theme.blue};`
      : `border: 2px solid ${theme.black};`}
  &:hover {
    border: 3px solid ${({ theme }) => theme.blue + 99};
  }
  position: relative;
`;

export const DemoNav = styled.div`
  width: 100%;
  height: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ option }) =>
    option === "light" ? lightTheme.primary : darkTheme.primary};
  position: absolute;
  top: 0;
  left: 0;
`;

export const DemoNavText = styled.div`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.secondary : darkTheme.secondary};
  padding: 10px;
`;

export const DemoBody = styled.div`
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ option }) =>
    option === "light" ? lightTheme.secondary : darkTheme.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const DemoBodyText = styled.div`
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.text_primary : darkTheme.text_primary};
`;

export const DemoBodyTextSecondary = styled.div`
  margin-left: 20px;
  font-size: 12px;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.text_secondary : darkTheme.text_secondary};
`;

export const DemoButton = styled.div`
    width: 25%;
    height: 25px;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    border: 2px solid
        ${({ option }) =>
            option === "light" ? lightTheme.primary : darkTheme.primary};
    background-color: ${({ option }) =>
        option === "light" ? lightTheme.primary : darkTheme.primary};
    color: ${({ option }) =>
        option === "light" ? lightTheme.secondary : darkTheme.secondary};
    &:hover {
        background-color: ${({ option }) =>
            option === "light" ? lightTheme.secondary + 99 : darkTheme.secondary};
        color: ${({ option }) =>
            option === "light" ? lightTheme.primary : darkTheme.primary};
    }
    margin-left: auto;
    margin-top: 6px;
    margin-right: 16px;
`;
