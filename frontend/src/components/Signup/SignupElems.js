import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 650px) {
    font-size: 32px;
    morgin-top: 0px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 600px;
  height: 700px;
  border-radius: 12px;
  border: 3px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.card};
  padding: 24px;
  @media (max-width: 650px) {
    width: 400px;
    height: 550px;
  }
  @media (max-width: 460px) {
    width: 340px;
    height: 500px;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  align-self: flex-start;
  margin-top: 8px;
  margin-left: -6px;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  margin-bottom: auto;
  margin-top: -10px;
  width: 100%;
  height: 60px;
  padding: 0px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 650px) {
    font-size: 14px;
    margin-top: -8px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary + 80};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 14px;
    margin-top: 6px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;
