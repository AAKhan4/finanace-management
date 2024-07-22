import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.card_dark};
  justify-content: center;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  padding: 0px 20px;
  z-index: 99;
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
  align-items: flex-start;
`;

export const Option = styled.a`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.text_secondary};
  padding: 8px 16px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
      color: ${theme.card_dark};
      background-color: ${theme.primary+99};
    `}
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 650px) {
    font-size: 16px;
    morgin-top: 0px;
  }
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    ${({ active, theme }) =>
      !active &&
      `
        background-color: ${theme.primary + 40};
    `}
  }
`;
