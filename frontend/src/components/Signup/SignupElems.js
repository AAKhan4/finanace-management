import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
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
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
    morgin-top: 12px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  width: 600px;
  height: 500px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primary + 80};
  background-color: ${({ theme }) => theme.card};
  padding: 24px;
  @media (max-width: 500px) {
    width: 380px;
    height: 340px;
  }
`;

export const Input = styled.input`
  margin-bottom: auto;
  margin-top: 4px;
  width: 100%;
  height: 80px;
  padding: 0px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 0px;
  }
`;

export const TextArea = styled.textarea`
  margin-bottom: auto;
  margin-top: 6px;
  width: 100%;
  height: 100%;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 0px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 80px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary + 80};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 0px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;
