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
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 125px;
    margin-left: 0px;
  }
  @media screen and (max-width: 960px) {
    width: 225px;
    height: 115px;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 100px;
  }
  @media screen and (max-width: 800px) {
    width: 175px;
    height: 90px;
  }
  @media screen and (max-width: 520px) {
    width: 150px;
    height: 80px;
  }
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
  @media screen and (max-width: 1100px) {
    height: 40px;
  }
  @media screen and (max-width: 960px) {
    height: 35px;
  }
  @media screen and (max-width: 900px) {
    height: 30px;
  }
  @media screen and (max-width: 800px) {
    height: 25px;
  }
  @media screen and (max-width: 520px) {
    height: 20px;
  }
`;

export const DemoNavText = styled.div`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.secondary : darkTheme.secondary};
  padding: 10px;
  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
    margin-top: -5px;
    font-size: 12px;
  }
  @media screen and (max-width: 800px) {
    margin-top: -8px;
    font-size: 11px;
  }
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
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
  @media screen and (max-width: 1100px) {
    height: 85px;
  }
  @media screen and (max-width: 960px) {
    height: 80px;
  }
  @media screen and (max-width: 900px) {
    height: 70px;
  }
  @media screen and (max-width: 800px) {
    height: 65px;
  }
  @media screen and (max-width: 520px) {
    height: 56px;
  }
`;

export const DemoBodyText = styled.div`
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.text_primary : darkTheme.text_primary};
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
  @media screen and (max-width: 960px) {
    margin-left: 8px;
    font-size: 11px;
  }
  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 6px;
    font-size: 9px;
  }
  @media screen and (max-width: 520px) {
    font-size: 8px;
  }
`;

export const DemoBodyTextSecondary = styled.div`
  margin-left: 20px;
  font-size: 12px;
  text-align: left;
  color: ${({ option }) =>
    option === "light" ? lightTheme.text_secondary : darkTheme.text_secondary};
  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }
  @media screen and (max-width: 960px) {
    margin-left: 18px;
    font-size: 9px;
  }
  @media screen and (max-width: 900px) {
    margin-top: -5px;
    font-size: 8px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 16px;
    font-size: 7px;
  }
  @media screen and (max-width: 520px) {
    margin-top: -8px;
    font-size: 6px;
  }
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
  margin-bottom: auto;
  @media screen and (max-width: 1100px) {
    height: 20px;
    font-size: 12px;
  }
  @media screen and (max-width: 960px) {
    height: 18px;
    font-size: 11px;
  }
  @media screen and (max-width: 900px) {
    height: 16px;
    font-size: 10px;
  }
  @media screen and (max-width: 800px) {
    height: 14px;
    font-size: 9px;
  }
`;
