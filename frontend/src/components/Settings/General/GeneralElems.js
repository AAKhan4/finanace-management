import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 20px 0px;
  margin-top: 60px;
`;

export const Section = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  align-self: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

export const Field = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 32px;
`;

export const FieldTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FieldTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;

export const FieldValContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

export const FieldVal = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;

export const FieldInput = styled.input`
  font-size: 16px;
  width: 100%;
  font-weight: 400;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  padding: 4px 8px;
  margin-left: 24px;
  margin-right: 12px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

export const FieldButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const FieldButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.card_dark};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 4px 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const Accept = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.card_dark};
  background-color: ${({ theme }) => theme.green};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.green};
  cursor: pointer;
  margin-right: 14px;
  padding: 4px 9px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.green};
  }
`;

export const Cancel = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.card_dark};
  background-color: ${({ theme }) => theme.red};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.red};
  cursor: pointer;
  padding: 4px 9px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.red};
  }
`;
