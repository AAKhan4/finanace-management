import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.card_dark};
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 80px;
  padding: 0px 20px;
  z-index: 99;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Option = styled.a`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.text_secondary};
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
        color: ${theme.card_dark};
        background-color: ${theme.primary + 80};
    `}
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 650px) {
    font-size: 16px;
    morgin-top: 0px;
  }
  &:hover {
    ${({ active, theme }) =>
      !active &&
      `
        color: ${theme.text_primary};
        background-color: ${theme.primary + 30};
    `}
  }
`;
