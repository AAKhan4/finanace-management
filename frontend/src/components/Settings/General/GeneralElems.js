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
`;

export const Section = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  margin: 10px 0px;
  align-self: center;
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
`;

export const FieldVal = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;

export const FieldInput = styled.input`
  font-size: 16px;
  width: 60%;
  font-weight: 400;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  padding: 4px 8px;
  margin-left: 24px;
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
  border: none;
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