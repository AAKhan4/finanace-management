import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
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
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.card_light};
  padding: 0 6px;
  display: flex;
  justify-content: start;
  width: 50%;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.card_dark};
  }
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Name = styled.div`
  padding: 0 16px;
  font-size: 24px;
  margin-top: 12px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -46px;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  @media screen and (max-width: 1200px) {
  }
`;

export const Button = styled.a`
  text-decoration: none;
  background-color: transparent;
  margin-left: 16px;
  color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.card_dark};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.card_dark};
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 640px) {
    margin-right: 0px;
  }
`;
